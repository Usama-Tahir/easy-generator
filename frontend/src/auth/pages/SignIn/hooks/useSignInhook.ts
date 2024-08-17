import React from "react";
import { useNavigate } from "react-router-dom";
import signinSchema from "../data/schema";
import { useMutation } from "@apollo/client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SIGN_IN_MUTATION } from "../data/SigninMutation";
import {
  SignInMutation,
  SignInMutationVariables,
} from "../../../../graphql/@types/schema";
import { SignInFormData } from "../types";
import useAuthToken from "../../../../common/hooks/auth/useAuthToken";
import useGraphQLErrorParser from "../../../../common/hooks/auth/useGraphQLErrorParser";

const useSignInForm = () => {
  const navigate = useNavigate();
  const [, setAuthToken] = useAuthToken();
  const [signIn, { loading, error }] = useMutation<
    SignInMutation,
    SignInMutationVariables
  >(SIGN_IN_MUTATION, {
    onCompleted: (data) => {
      setAuthToken(data.login.accessToken);
    },
  });
  const parsedErrors = useGraphQLErrorParser(error?.graphQLErrors);

  const errorMessagesArr = React.useMemo(
    () => parsedErrors?.map((error) => error.message),
    [parsedErrors]
  );

  const form = useForm<SignInFormData>({
    resolver: zodResolver(signinSchema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
    await signIn({
      variables: {
        loginInput: {
          email: data.email,
          password: data.password,
        },
      },
    });
    navigate("/");
  };

  return { form, onSubmit, loading, fromErrors: errorMessagesArr };
};

export default useSignInForm;
