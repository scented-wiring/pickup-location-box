import { render, fireEvent, screen } from "@testing-library/react";
import App from "../components/App";

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

test("renders SearchResults when textbox is focused", () => {
  render(<App />);
  fireEvent.focus(
    screen.getByPlaceholderText(
      "city, airport, station, region and district..."
    )
  );
  expect(screen.getByText("Test")).toBeInTheDocument();
});
