import { render, screen } from "@testing-library/react";
import SearchResult from "../components/SearchResult";

test("renders correctly", () => {
  const { asFragment } = render(<SearchResult />);
  expect(asFragment).toMatchSnapshot();
});

test("renders prop as strings if placeType prop is true", () => {
  render(
    <SearchResult
      placeType="A"
      name="Manchester Airport"
      region="Manchester"
      country="United Kingdom"
    />
  );
  expect(
    screen.getByText("Manchester Airport. Manchester, United Kingdom")
  ).toBeInTheDocument();
});

test("only renders the name prop if placeType prop is false", () => {
  render(
    <SearchResult
      name="No results found"
      region="Manchester"
      country="United Kingdom"
    />
  );
  expect(screen.getByText("No results found.")).toBeInTheDocument();
});
