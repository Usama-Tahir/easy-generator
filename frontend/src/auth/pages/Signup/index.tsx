import React from "react";

import { Box, Button, VStack, Heading, Text, Link } from "@chakra-ui/react";
import useSignupForm from "./hooks/useSignuphook";
import FormField from "../../../common/components/FormField";
import { SignupFormData } from "./types";
import { Link as RouterLink } from "react-router-dom";
import { ToastNotification } from "../../../common/components/Toast";
import { routePaths } from "../../../common/constants";

export const SignupForm: React.FC = () => {
  const { form, onSubmit, loading, fromErrors } = useSignupForm();
  const { handleSubmit } = form;

  return (
    <>
      <Box maxWidth="400px" margin="auto" mt={8}>
        <Heading mb={4}>Sign Up</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={4}>
            <FormField<SignupFormData>
              name="email"
              label="Email"
              form={form}
              type="email"
              isRequired
            />
            <FormField<SignupFormData>
              name="username"
              label="Username"
              form={form}
              isRequired
              rules={{
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters long",
                },
              }}
            />
            <FormField<SignupFormData>
              name="firstName"
              label="First Name (Optional)"
              form={form}
            />
            <FormField<SignupFormData>
              name="lastName"
              label="Last Name (Optional)"
              form={form}
            />
            <FormField<SignupFormData>
              name="password"
              label="Password"
              form={form}
              type="password"
              isRequired
              rules={{
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  message:
                    "Password must contain at least 1 letter, 1 number, and 1 special character",
                },
              }}
            />
            <Button
              type="submit"
              colorScheme="blue"
              width="full"
              isLoading={loading}
            >
              Sign Up
            </Button>
          </VStack>
        </form>
        <Text mt={4} textAlign="center">
          Already have an account?
          <Link as={RouterLink} to={routePaths.LOGIN} color="blue.500">
            Log in
          </Link>
        </Text>
      </Box>
      {fromErrors && fromErrors?.length > 0 && (
        <ToastNotification
          messages={fromErrors}
          status="error"
          id={"sign-up-error-toast"}
          position={"top-right"}
        />
      )}
    </>
  );
};

export default SignupForm;
