import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Privacy from "./Privacy";

jest.useFakeTimers();

describe("Privacy component", () => {
  test("renders input", () => {
    render(<Privacy />);
    const input = screen.getByPlaceholderText("Search...");
    expect(input).toBeInTheDocument();
  });

  test("updates input value", () => {
    render(<Privacy />);
    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "hello" } });
    expect(input.value).toBe("hello");
  });

  test("calls API after debounce", async () => {
    render(<Privacy />);
    const input = screen.getByPlaceholderText("Search...");

    const consoleSpy = jest.spyOn(console, "log");

    fireEvent.change(input, { target: { value: "test" } });

    // Advance timers to trigger debounce
    jest.advanceTimersByTime(2000);

    // Wait for React to run effects
    await waitFor(() => {
      const apiCall = consoleSpy.mock.calls.find(
        (call) => call[0] === "API called with:"
      );
      expect(apiCall).toBeDefined();
      expect(apiCall[1]).toBe("test");
    });

    consoleSpy.mockRestore();
  });
});
