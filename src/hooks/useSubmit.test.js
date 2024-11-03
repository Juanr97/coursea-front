import { renderHook, act } from "@testing-library/react";
import useSubmit from "./useSubmit";

describe("useSubmit", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test("should handle successful submission", async () => {
    jest.spyOn(global.Math, "random").mockReturnValue(0.6);

    const { result } = renderHook(() => useSubmit());

    act(() => {
      result.current.submit({ firstName: "John" });
    });

    expect(result.current.isLoading).toBe(true);

    await act(async () => {
      jest.advanceTimersByTime(2000);
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.response).toEqual({
      type: "success",
      message: "Thanks for your submission, John!",
    });

    global.Math.random.mockRestore();
  });

  test("should handle error on submission", async () => {
    jest.spyOn(global.Math, "random").mockReturnValue(0.4);

    const { result } = renderHook(() => useSubmit());

    act(() => {
      result.current.submit({ firstName: "John" });
    });

    expect(result.current.isLoading).toBe(true);

    await act(async () => {
      jest.advanceTimersByTime(2000);
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.response).toEqual({
      type: "error",
      message: "Something went wrong, please try again later!",
    });

    global.Math.random.mockRestore();
  });

  test("should reset response and set loading state correctly", async () => {
    const { result } = renderHook(() => useSubmit());

    act(() => {
      result.current.submit({ firstName: "Jane" });
    });

    expect(result.current.isLoading).toBe(true);
    expect(result.current.response).toBeNull();

    await act(async () => {
      jest.advanceTimersByTime(2000);
    });

    expect(result.current.isLoading).toBe(false);
  });
});