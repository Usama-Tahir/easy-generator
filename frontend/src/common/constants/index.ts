// Vite environment variables
const VITE_APP_SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;
const VITE_APP_AUTH_TOKEN_COOKIE_EXPIRES = import.meta.env
  .VITE_APP_AUTH_TOKEN_COOKIE_EXPIRES;

// GraphQL URI
const GRAPHQL_URI = VITE_APP_SERVER_URL;

// Cookie keys
const cookieKeys = {
  AUTH_TOKEN: "AUTH_TOKEN",
};

const authCookieExpiry = VITE_APP_AUTH_TOKEN_COOKIE_EXPIRES ?? "1h";

export { GRAPHQL_URI, cookieKeys, authCookieExpiry };
