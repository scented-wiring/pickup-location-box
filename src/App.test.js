import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders a header", () => {
  render(<App />);
  expect(screen.getByText(/where are you going?/i)).toBeInTheDocument();
});

test("renders a label", () => {
  render(<App />);
  expect(screen.getByText("Pick-up Location")).toBeTruthy();
});

test("renders a textbox", () => {
  render(<App />);
  expect(screen.getByRole("textbox")).toBeTruthy();
});
