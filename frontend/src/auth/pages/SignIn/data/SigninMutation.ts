import { gql } from "@apollo/client";

const SIGN_IN_MUTATION = gql`
  mutation SignIn($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      accessToken
      user {
        isActive
        _id
        email
      }
    }
  }
`;

export { SIGN_IN_MUTATION };
