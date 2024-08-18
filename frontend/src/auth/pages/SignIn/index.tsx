import React from "react";
import { Box, Button, VStack, Heading, Text, Link } from "@chakra-ui/react";
import useSignInForm from "./hooks/useSignInhook";
import FormField from "../../../common/components/FormField";
import { SignInFormData } from "./types";
import { Link as RouterLink } from "react-router-dom";
import { ToastNotification } from "../../../common/components/Toast";
import { routePaths } from "../../../common/constants";

export const SigninForm: React.FC = () => {
  const { form, onSubmit, loading, fromErrors } = useSignInForm();
  const { handleSubmit } = form;

  return (
    <>
      <Box maxWidth="400px" margin="auto" mt={8}>
        <Heading mb={4}>Login</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={4}>
            <FormField<SignInFormData>
              name="email"
              label="Email"
              form={form}
              type="email"
              isRequired
            />

            <FormField<SignInFormData>
              name="password"
              label="Password"
              form={form}
              type="password"
              isRequired
            />
            <Button
              type="submit"
              colorScheme="blue"
              width="full"
              isLoading={loading}
            >
              Sign In
            </Button>
          </VStack>
        </form>
        <Text mt={4} textAlign="center">
          Need to create an account?
          <Link as={RouterLink} to={routePaths.SIGN_UP} color="blue.500">
            Sign up
          </Link>
        </Text>
      </Box>
      {fromErrors && fromErrors?.length > 0 && (
        <ToastNotification
          messages={fromErrors}
          status="error"
          id={"sign-in-error-toast"}
          position={"top-right"}
        />
      )}
    </>
  );
};

export default SigninForm;
