import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Main from './Main';


jest.mock('@chakra-ui/react', () => ({
  Box: ({ children, ...props }) => <div {...props}>{children}</div>,
  Text: ({ children, ...props }) => <p {...props}>{children}</p>,
  Button: ({ children, ...props }) => <button {...props}>{children}</button>,
  VStack: ({ children, ...props }) => <div {...props}>{children}</div>,
  Heading: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
}));

describe('Main Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );
  });

  test('renders the main heading', () => {
    const heading = screen.getByRole('heading', { name: /welcome to little lemon restaurant/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders the reservation description text', () => {
    const descriptionText = screen.getByText(/experience a unique dining atmosphere/i);
    expect(descriptionText).toBeInTheDocument();
  });

  test('renders the reservation button with correct link', () => {
    const bookButton = screen.getByRole('button', { name: /book a table/i });
    expect(bookButton).toBeInTheDocument();
    expect(bookButton).toHaveAttribute('to', '/booking'); 
  });

  test('renders the menu section heading', () => {
    const menuHeading = screen.getByRole('heading', { name: /explore our menu/i });
    expect(menuHeading).toBeInTheDocument();
  });

  test('renders the menu description text', () => {
    const menuDescriptionText = screen.getByText(/discover a variety of dishes/i);
    expect(menuDescriptionText).toBeInTheDocument();
  });

  test('renders the menu button with correct link', () => {
    const menuButton = screen.getByRole('button', { name: /view full menu/i });
    expect(menuButton).toBeInTheDocument();
    expect(menuButton).toHaveAttribute('to', '/menu'); 
  });
});