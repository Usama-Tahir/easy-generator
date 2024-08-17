import { gql } from "@apollo/client";

const GET_CURRENT_USER = gql`
  query CurrentUser {
    currentUser {
      _id
      username
      email
      isActive
    }
  }
`;

export { GET_CURRENT_USER };
