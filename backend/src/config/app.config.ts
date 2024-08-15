import { registerAs } from '@nestjs/config';

export interface AppVariables {
  app: {
    environment: 'development' | 'production' | 'test' | 'provision';
    port: number;
  };
}

export default registerAs('app', () => ({
  environment: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.HTTP_PORT, 10) || 3000,
}));
