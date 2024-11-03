import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Nav from "./Nav";
import "@testing-library/jest-dom";

// Mock Chakra UI components
jest.mock("@chakra-ui/react", () => ({
  Box: ({ children }) => <nav>{children}</nav>,
  HStack: ({ children }) => <div>{children}</div>,
  Link: ({ children, ...props }) => <a {...props}>{children}</a>,
}));

// Helper function to render with MemoryRouter
const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);
  return render(ui, { wrapper: MemoryRouter });
};

describe("Nav Component", () => {
  it("renders all navigation links", () => {
    renderWithRouter(<Nav />);

    // Check that each navigation link is rendered
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Menu")).toBeInTheDocument();
    expect(screen.getByText("Reservations")).toBeInTheDocument();
  });

  it("applies active styling to the Home link when on the Home route", () => {
    renderWithRouter(<Nav />, { route: "/" });

    // Check that the Home link has active styling
    const homeLink = screen.getByText("Home");
    expect(homeLink).toHaveStyle("color: orange.300");
  });

  it("applies active styling to the Menu link when on the Menu route", () => {
    renderWithRouter(<Nav />, { route: "/menu" });

    // Check that the Menu link has active styling
    const menuLink = screen.getByText("Menu");
    expect(menuLink).toHaveStyle("color: orange.300");
  });

  it("applies active styling to the Reservations link when on the Booking route", () => {
    renderWithRouter(<Nav />, { route: "/booking" });

    // Check that the Reservations link has active styling
    const reservationsLink = screen.getByText("Reservations");
    expect(reservationsLink).toHaveStyle("color: orange.300");
  });
});