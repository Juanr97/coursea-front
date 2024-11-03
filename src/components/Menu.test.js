import React from 'react';
import { render, screen } from '@testing-library/react';
import Menu from './Menu';
 
jest.mock('@chakra-ui/react', () => ({
  Box: ({ children, ...props }) => <div {...props}>{children}</div>,
  Text: ({ children, ...props }) => <p {...props}>{children}</p>,
  VStack: ({ children, ...props }) => <div {...props}>{children}</div>,
  SimpleGrid: ({ children, ...props }) => <div {...props}>{children}</div>,
  Image: ({ ...props }) => <img {...props} />,
  Heading: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
}));

describe('Menu Component', () => {
  beforeEach(() => {
    render(<Menu />);
  });

  test('renders the menu heading', () => {
    const heading = screen.getByRole('heading', { name: /our menu/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders all menu items', () => {
    const menuItems = [
      "Margherita Pizza",
      "Caesar Salad",
      "Spaghetti Carbonara",
      "Grilled Salmon",
      "Beef Burger",
      "Tiramisu",
    ];

    menuItems.forEach((itemName) => {
      const item = screen.getByRole('heading', { name: itemName });
      expect(item).toBeInTheDocument();
    });
  });

  test('displays correct descriptions and prices for each item', () => {
    const descriptionsAndPrices = [
      { description: /classic margherita pizza/i, price: /\$12.00/ },
      { description: /crispy romaine lettuce/i, price: /\$9.00/ },
      { description: /spaghetti with creamy carbonara sauce/i, price: /\$15.00/ },
      { description: /perfectly grilled salmon/i, price: /\$20.00/ },
      { description: /juicy beef burger/i, price: /\$14.00/ },
      { description: /classic italian dessert/i, price: /\$7.00/ },
    ];

    descriptionsAndPrices.forEach(({ description, price }) => {
      const descriptionElement = screen.getByText(description);
      const priceElement = screen.getByText(price);

      expect(descriptionElement).toBeInTheDocument();
      expect(priceElement).toBeInTheDocument();
    });
  });

  test('renders an image for each menu item with correct alt text', () => {
    const menuItems = [
      { name: "Margherita Pizza", image: "images/pizza.jpg" },
      { name: "Caesar Salad", image: "images/ensalada.jpg" },
      { name: "Spaghetti Carbonara", image: "images/spaguetti.png" },
      { name: "Grilled Salmon", image: "images/salmon.png" },
      { name: "Beef Burger", image: "images/burguer.jpeg" },
      { name: "Tiramisu", image: "images/tiramisu.png" },
    ];

    menuItems.forEach(({ name, image }) => {
      const img = screen.getByAltText(name);
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', image);
    });
  });
});