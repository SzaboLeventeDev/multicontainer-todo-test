const config = {
  protocol: import.meta.env.PROTOCOL || 'http',
  backendPort: import.meta.env.BACKEND_PORT || '3000',
  backendHost: import.meta.env.BACKEND_HOST || 'localhost',
};

export default config;
