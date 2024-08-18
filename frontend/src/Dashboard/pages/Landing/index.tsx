import React from "react";
import {
  Box,
  Heading,
  Container,
  VStack,
  useColorModeValue,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useAuthToken from "../../../common/hooks/auth/useAuthToken";
import { routePaths } from "../../../common/constants";

const Dashboard: React.FC = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const navigate = useNavigate();
  const [, , removeAuthToken] = useAuthToken();
  

  const handleLogout = React.useCallback(() => {
    removeAuthToken();
    navigate(routePaths.LOGIN);
  }, [navigate]);

  return (
    <Box bg={bgColor} minHeight="100vh" py={10}>
      <Container maxW="container.xl">
        <Flex justifyContent="flex-end" mb={4}>
          <Button colorScheme="red" onClick={handleLogout}>
            Logout
          </Button>
        </Flex>
        <VStack spacing={8} align="stretch">
          <Heading as="h1" size="2xl" textAlign="center" color={textColor}>
            Welcome to the application.
          </Heading>
        </VStack>
      </Container>
    </Box>
  );
};

export default Dashboard;
