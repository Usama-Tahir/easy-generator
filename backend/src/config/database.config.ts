import { registerAs } from '@nestjs/config';

export interface DatabaseVariables {
  database: {
    uri: string;
    debug: boolean;
    timeoutOptions: {
      serverSelectionTimeoutMS: number;
      socketTimeoutMS: number;
      heartbeatFrequencyMS: number;
    };
  };
}

export default registerAs('database', () => ({
  uri:
    process.env?.DATABASE_URI ??
    'mongodb://localhost:27017,localhost:27018,localhost:27019',
  debug: process.env.DATABASE_DEBUG === 'true',
  timeoutOptions: {
    serverSelectionTimeoutMS: 30 * 1000, // 30 secs
    socketTimeoutMS: 30 * 1000, // 30 secs
    heartbeatFrequencyMS: 30 * 1000, // 30 secs
  },
}));
