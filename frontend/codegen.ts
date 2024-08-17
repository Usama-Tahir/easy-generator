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
  documents: ["src/**/*.ts", "src/**/*.tsx"],
  generates: {
    "src/graphql/@types/generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
        nonOptionalTypename: true,
        exportFragmentSpreadSubTypes: true,
        dedupeFragments: true,
      },
    },
  },
};

export default config;
