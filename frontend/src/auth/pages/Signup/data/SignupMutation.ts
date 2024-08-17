import { gql } from "@apollo/client";

const SIGN_UP_MUTATION = gql`
  mutation SignUp($createUserInput: CreateUserInput!) {
    signUp(createUserInput: $createUserInput) {
      accessToken
      user {
        isActive
        _id
        email
      }
    }
  }
`;

export { SIGN_UP_MUTATION };
