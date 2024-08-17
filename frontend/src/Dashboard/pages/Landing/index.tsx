import React from "react";
import {
  Box,
  Heading,
  Container,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

const Dashboard: React.FC = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Box bg={bgColor} minHeight="100vh" py={10}>
      <Container maxW="container.xl">
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
