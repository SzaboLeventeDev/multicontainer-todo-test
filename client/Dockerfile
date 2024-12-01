# Base image
FROM node:20.3-alpine AS base

# Dependency layer
FROM base AS deps
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY ./package.json ./yarn.lock* ./package-lock.json* ./pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; echo "Install packages with Yarn package manager."; \
  elif [ -f package-lock.json ]; then npm ci; echo "Install packages with NPM package manager."; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i; echo "Install packages with PNPM package manager.";\
  else echo "Lockfile not found." && exit 1; \
  fi

# 2. Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . ./

# Set environment variable for build
ARG NODE_ENV=production

# Dynamically copy the correct .env file based on the environment
# RUN if [ -f .env.${ENVIRONMENT} ]; then cp .env.${ENVIRONMENT} .env; else echo ".env.${ENVIRONMENT} not found" && exit 1; fi

# Build the application
RUN \
  if [ -f yarn.lock ]; then yarn build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then pnpm build; \
  fi
# TODO: ensure that the script block contains build script.

# Final layer
FROM base AS runner
WORKDIR /dist

RUN \
  if [ -f /app/yarn.lock ]; then yarn add serve; \
  elif [ -f /app/package-lock.json ]; then npm install serve; \
  elif [ -f /app/pnpm-lock.yaml ]; then corepack enable pnpm && pnpm add serve; \
  fi


# Remove default static assets
# RUN rm -rf ./*

# Copy build output from the builder stage
COPY --from=builder /app/dist ./

# Expose port 8080
EXPOSE 8080

# Start NGINX server
# CMD ["nginx", "-g", "daemon off;"]

# Start the frontend app
CMD ["npx","serve", "-s", "dist", "-l", "8080"]