import React from "react";
import {
  useToast,
  Box,
  VStack,
  Text,
  AlertStatus,
  ToastPosition,
} from "@chakra-ui/react";

// type ToastStatus = "success" | "error" | "warning" | "info";

interface ToastNotificationProps {
  id: string | number;
  messages: string[];
  status: AlertStatus;
  title?: string;
  position?: ToastPosition;
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({
  id,
  messages,
  status,
  title,
  position,
}) => {
  const toast = useToast();

  React.useEffect(() => {
    if (messages.length > 0 && toast.isActive(id) === false) {
      toast({
        id,
        position,
        title: title || status.charAt(0).toUpperCase() + status.slice(1),
        description: (
          <Box>
            <VStack align="start" spacing={1}>
              {messages.map((message, index) => (
                <Text key={index}>{message}</Text>
              ))}
            </VStack>
          </Box>
        ),
        status: status,
        duration: 5000,
        isClosable: true,
      });
    }
  }, [messages, status, toast, title, id, position]);

  return null;
};
