import React from "react";
import { render, screen } from "@testing-library/react";
import Alert from "./Alert";

// Mock Chakra UI components
jest.mock("@chakra-ui/react", () => ({
  AlertDialog: ({ children, isOpen }) => (isOpen ? <div>{children}</div> : null),
  AlertDialogOverlay: ({ children }) => <div>{children}</div>,
  AlertDialogContent: ({ children }) => <div>{children}</div>,
  AlertDialogHeader: ({ children }) => <h2>{children}</h2>,
  AlertDialogBody: ({ children }) => <div>{children}</div>,
}));

// Mock the Alert Context
jest.mock("../context/AlertContext", () => ({
  useAlertContext: jest.fn(),
}));

import { useAlertContext } from "../context/AlertContext";

describe("Alert Component", () => {
  it("renders success alert with correct message", () => {
    // Mock context values for a success alert
    useAlertContext.mockReturnValue({
      isOpen: true,
      message: "Operation successful!",
      type: "success",
      showAlert: jest.fn(),
    });

    render(<Alert />);

    // Verify the success alert renders with correct styling and message
    expect(screen.getByText("Success")).toBeInTheDocument();
    expect(screen.getByText("Operation successful!")).toBeInTheDocument();
  });

  it("renders error alert with correct message", () => {
    // Mock context values for an error alert
    useAlertContext.mockReturnValue({
      isOpen: true,
      message: "An error occurred.",
      type: "error",
      showAlert: jest.fn(),
    });

    render(<Alert />);

    // Verify the error alert renders with correct styling and message
    expect(screen.getByText("Error")).toBeInTheDocument();
    expect(screen.getByText("An error occurred.")).toBeInTheDocument();
  });

  it("does not render alert when isOpen is false", () => {
    // Mock context values with isOpen set to false
    useAlertContext.mockReturnValue({
      isOpen: false,
      message: "",
      type: "",
      showAlert: jest.fn(),
    });

    render(<Alert />);

    // Check that alert dialog is not rendered
    expect(screen.queryByText("Success")).not.toBeInTheDocument();
    expect(screen.queryByText("Error")).not.toBeInTheDocument();
  });
});