import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { GRAPHQL_URI } from "../../constants";
import useAuthToken from "../../hooks/auth/useAuthToken";

// Helpers
const formattedAuthHeader = (token: string) => (token ? `Bearer ${token}` : "");

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: GRAPHQL_URI,
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const useConfiguredApolloClient = () => {
  const [authToken] = useAuthToken();

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: formattedAuthHeader(authToken),
      },
    };
  });

  const client = new ApolloClient({
    link: from([authLink, errorLink, httpLink]),
    cache: cache,
  });

  return client;
};

export default useConfiguredApolloClient;
