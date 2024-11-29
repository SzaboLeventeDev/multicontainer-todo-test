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
COPY ./ ./

# Use build arguments for environment selection
ARG NODE_ENV=production

# Set the NODE_ENV based on the build argument
# ARG ENVIRONMENT=production
ENV NODE_ENV=${NODE_ENV}

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

COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./

# Expose port
EXPOSE 3000

# Start the backend server
CMD ["node", "index.js"]

