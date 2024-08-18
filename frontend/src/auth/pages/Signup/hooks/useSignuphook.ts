import { useNavigate } from "react-router-dom";
import signupSchema from "../data/schema";
import { useMutation } from "@apollo/client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SIGN_UP_MUTATION } from "../data/SignupMutation";
import {
  SignUpMutation,
  SignUpMutationVariables,
} from "../../../../graphql/@types/schema";
import { SignupFormData } from "../types";
import useAuthToken from "../../../../common/hooks/auth/useAuthToken";
import useGraphQLErrorParser from "../../../../common/hooks/auth/useGraphQLErrorParser";
import React from "react";
import { routePaths } from "../../../../common/constants";

const useSignupForm = () => {
  const navigate = useNavigate();
  const [, setAuthToken] = useAuthToken();
  const [signUp, { loading, error }] = useMutation<
    SignUpMutation,
    SignUpMutationVariables
  >(SIGN_UP_MUTATION, {
    onCompleted: (data) => {
      setAuthToken(data.signUp.accessToken);
    },
  });
  const parsedErrors = useGraphQLErrorParser(error?.graphQLErrors);

  const errorMessagesArr = React.useMemo(
    () => parsedErrors?.map((error) => error.message),
    [parsedErrors]
  );

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<SignupFormData> = async (data) => {
    await signUp({
      variables: {
        createUserInput: {
          email: data.email,
          username: data.username,
          password: data.password,
          ...(data.firstName && { firstName: data.firstName }),
          ...(data.lastName && { lastName: data.lastName }),
        },
      },
    });
    navigate(routePaths.HOME);
  };

  return { form, onSubmit, loading, fromErrors: errorMessagesArr };
};

export default useSignupForm;
