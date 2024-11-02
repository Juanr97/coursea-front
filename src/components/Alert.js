import React from "react";
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/AlertContext";

function Alert() {
  const { isOpen, message, type, showAlert } = useAlertContext();
  const cancelRef = React.useRef();

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={() => {}}
      closeOnOverlayClick={false} // Para evitar que se cierre al hacer clic en el overlay
    >
      <AlertDialogOverlay>
        <AlertDialogContent borderRadius="md" boxShadow="lg" p={4} bg={type === "success" ? "green.100" : "red.100"}>
          <AlertDialogHeader fontSize="lg" fontWeight="bold" color={type === "success" ? "green.600" : "red.600"}>
            {type === "success" ? "Success" : "Error"}
          </AlertDialogHeader>
          <AlertDialogBody>
            {message}
          </AlertDialogBody>
          
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Alert;