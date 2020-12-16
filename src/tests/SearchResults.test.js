import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

test("renders correctly", () => {
  const { asFragment } = render(<SearchResults query="man" />);
  expect(asFragment).toMatchSnapshot();
});
