import React from "react";
import { render, screen, act } from "@testing-library/react";
import { AlertProvider, useAlertContext } from "./AlertContext";
import "@testing-library/jest-dom";


const TestComponent = () => {
  const { isOpen, message, type, showAlert } = useAlertContext();

  return (
    <div>
      <button onClick={() => showAlert("Test Message", "error")}>Show Alert</button>
      {isOpen && (
        <div role="alert" data-type={type}>
          {message}
        </div>
      )}
    </div>
  );
};

describe("AlertContext", () => {
  beforeEach(() => {
    jest.useFakeTimers(); 
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test("should display alert with correct message and type", () => {
    render(
      <AlertProvider>
        <TestComponent />
      </AlertProvider>
    );

    const showAlertButton = screen.getByRole("button", { name: /show alert/i });
    act(() => {
      showAlertButton.click();
    });

    
    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent("Test Message");
    expect(alert).toHaveAttribute("data-type", "error");
  });

  test("should hide alert after 3 seconds", () => {
    render(
      <AlertProvider>
        <TestComponent />
      </AlertProvider>
    );

    const showAlertButton = screen.getByRole("button", { name: /show alert/i });
    act(() => {
      showAlertButton.click();
    });

    expect(screen.getByRole("alert")).toBeInTheDocument();

    
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  test("should reset timeout if showAlert is called again", () => {
    render(
      <AlertProvider>
        <TestComponent />
      </AlertProvider>
    );

    const showAlertButton = screen.getByRole("button", { name: /show alert/i });

    
    act(() => {
      showAlertButton.click();
    });

    expect(screen.getByRole("alert")).toBeInTheDocument();

    
    act(() => {
      jest.advanceTimersByTime(1500);
    });

    
    act(() => {
      showAlertButton.click();
    });

    
    act(() => {
      jest.advanceTimersByTime(1500);
    });

    
    expect(screen.getByRole("alert")).toBeInTheDocument();

    
    act(() => {
      jest.advanceTimersByTime(1500);
    });

    
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });
});