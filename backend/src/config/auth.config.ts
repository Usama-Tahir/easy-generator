import { registerAs } from '@nestjs/config';

export interface AuthVariables {
  auth: {
    authTokenSecret: string;
    refreshTokenSecret: string;
    accessTokenExpiration: string;
    refreshTokenExpiration: string;
  };
}

export default registerAs('auth', () => ({
  authTokenSecret: process.env.AUTH_TOKEN_SECRET,
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
  accessTokenExpiration: process.env.ACCESS_TOKEN_EXPIRATION,
  refreshTokenExpiration: process.env.REFRESH_TOKEN_EXPIRATION,
}));
