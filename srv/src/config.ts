import { Config } from './types/types';

const config: Config = {
  port: parseInt(process.env.BACKEND_PORT || '8080', 10),
};

export default config;
