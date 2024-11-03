// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
const originalError = console.error;
const originalWarn = console.warn;

console.error = (...args) => {
  if (
    args[0].includes("Warning:") ||
    args[0].includes("Deprecated") // Añade filtros según sea necesario
  ) {
    return;
  }
  originalError(...args);
};

console.warn = (...args) => {
  if (
    args[0].includes("Warning:") ||
    args[0].includes("Deprecated") // Añade filtros según sea necesario
  ) {
    return;
  }
  originalWarn(...args);
};