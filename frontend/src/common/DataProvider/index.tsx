import React from "react";
import { ApolloProvider } from "@apollo/client";
import useConfiguredApolloClient from "./useConfiguredApolloClient";

// Types
type Props = {
  children: React.ReactNode;
};

const DataProvider = ({ children }: Props) => {
  const client = useConfiguredApolloClient();
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default DataProvider;
