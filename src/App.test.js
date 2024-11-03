import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


jest.mock('./components/Header', () => () => <header>Header Component</header>);
jest.mock('./components/Main', () => () => <div>Main Component</div>);
jest.mock('./components/BookingForm', () => () => <div>BookingForm Component</div>);
jest.mock('./components/Footer', () => () => <footer>Footer Component</footer>);
jest.mock('./components/Alert', () => () => <div>Alert Component</div>);
jest.mock('./components/Nav', () => () => <nav>Nav Component</nav>);
jest.mock('./components/Menu', () => () => <div>Menu Component</div>);

describe('App Component', () => {
  test('renders Header, Nav, and Footer components', () => {
    render(<App />);

    
    expect(screen.getByText('Header Component')).toBeInTheDocument();
    expect(screen.getByText('Nav Component')).toBeInTheDocument();
    expect(screen.getByText('Footer Component')).toBeInTheDocument();
    expect(screen.getByText('Alert Component')).toBeInTheDocument();
  });

  test('renders Main component on default route', () => {
    render(<App />);
    expect(screen.getByText('Main Component')).toBeInTheDocument();
  });

  test('renders Menu component on /menu route', () => {
    window.history.pushState({}, 'Menu', '/menu');
    render(<App />);
    expect(screen.getByText('Menu Component')).toBeInTheDocument();
  });

  test('renders BookingForm component on /booking route', () => {
    window.history.pushState({}, 'BookingForm', '/booking');
    render(<App />);
    expect(screen.getByText('BookingForm Component')).toBeInTheDocument();
  });
});