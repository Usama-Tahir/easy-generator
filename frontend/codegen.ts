import * as dotenv from "dotenv";
import type { CodegenConfig } from "@graphql-codegen/cli";

dotenv.config();

const SCHEMA_URL = process.env.VITE_APP_SERVER_URL;

if (!SCHEMA_URL) {
  throw new Error(
    "VITE_APP_SERVER_URL is not defined in the environment variables"
  );
}

const config: CodegenConfig = {
  overwrite: true,
  schema: SCHEMA_URL,
  documents: ["src/**/*.ts"],
  config: {
    nonOptionalTypename: true,
  },
  generates: {
    "src/graphql/@types/schema.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
    "src/graphql/@types/apollo-helpers.ts": {
      plugins: ["typescript-apollo-client-helpers"],
    },
  },
};

export default config;
