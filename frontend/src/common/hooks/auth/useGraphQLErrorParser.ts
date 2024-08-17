import { useMemo } from "react";
import { GraphQLFormattedError } from "graphql";

interface ParsedError {
  message: string;
  path?: string[];
  extensions?: Record<string, unknown>;
}

const useGraphQLErrorParser = (errors?: readonly GraphQLFormattedError[]) => {
  return useMemo(() => {
    if (!errors || errors.length === 0) {
      return null;
    }

    return errors.map((error): ParsedError => {
      const { message, path, extensions } = error;
      return {
        message,
        path: path?.map(String),
        extensions: extensions as Record<string, unknown>,
      };
    });
  }, [errors]);
};

export default useGraphQLErrorParser;
