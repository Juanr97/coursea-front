import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

// Mock Chakra UI components
jest.mock("@chakra-ui/react", () => ({
  Box: ({ children, as }) => <div role={as}>{children}</div>,
  Heading: ({ children }) => <h1>{children}</h1>,
}));

describe("Header Component", () => {
  test("renders the Header component", () => {
    render(<Header />);

    // Check if the Header box (header role) is present
    const headerBox = screen.getByRole("header");
    expect(headerBox).toBeInTheDocument();

    // Check if the heading is present with correct text
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Little Lemon Restaurant");
  });
});