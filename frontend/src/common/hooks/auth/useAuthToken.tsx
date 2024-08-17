import { useCookies } from "react-cookie";
import { convertAnyValidFormatToDate } from "../../utils/humanReadableTime";
import { authCookieExpiry, cookieKeys } from "../../constants";

const { AUTH_TOKEN } = cookieKeys;

// custom hook to handle authToken - we use compositon to decouple the auth system and it's storage
const useAuthToken = () => {
  //we use react-cookies to access our cookies
  const [cookies, setCookie, removeCookie] = useCookies([AUTH_TOKEN]);

  const expiryDate = convertAnyValidFormatToDate(authCookieExpiry);

  // this function allows to save any string in our cookies, under the key "authToken"
  const setAuthToken = (authToken: string) =>
    setCookie(AUTH_TOKEN, authToken, {
      path: "/",
      ...(expiryDate && {
        expires: expiryDate,
      }),
    });

  //this function removes the key "authToken" from our cookies. Useful to logout
  const removeAuthToken = () => removeCookie(AUTH_TOKEN, { path: "/" });

  return [cookies[AUTH_TOKEN], setAuthToken, removeAuthToken] as const;
};

export default useAuthToken;
