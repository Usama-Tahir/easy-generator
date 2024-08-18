import { registerAs } from '@nestjs/config';

export interface AuthVariables {
  auth: {
    authTokenSecret: string;
    accessTokenExpiration: string;
  };
}

export default registerAs('auth', () => ({
  authTokenSecret: process.env.AUTH_TOKEN_SECRET,
  accessTokenExpiration: process.env.ACCESS_TOKEN_EXPIRATION,
}));
