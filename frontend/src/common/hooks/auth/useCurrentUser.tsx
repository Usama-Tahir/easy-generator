import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "./data/CurrentUser";
import {
  CurrentUserQuery,
  CurrentUserQueryVariables,
} from "../../../graphql/@types/schema";

const useCurrentUser = () => {
  const { data, error, loading } = useQuery<
    CurrentUserQuery,
    CurrentUserQueryVariables
  >(GET_CURRENT_USER);

  return { currentUser: data && data.currentUser, loading, error };
};

export default useCurrentUser;
