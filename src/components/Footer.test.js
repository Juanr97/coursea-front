import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

jest.mock("@chakra-ui/react", () => ({
  Box: ({ children }) => <div>{children}</div>,
  Text: ({ children }) => <p>{children}</p>,
}));

describe("Footer Component", () => {
  it("renders footer with correct text", () => {

    render(<Footer />);


    const currentYear = new Date().getFullYear();


    expect(screen.getByText(`© ${currentYear} Little Lemon Restaurant`)).toBeInTheDocument();
  });
});