import "./App.css";
import { useState } from "react";
import SearchResults from "./SearchResults";

function App() {
  const [focus, setFocus] = useState(false);
  const [query, setQuery] = useState("");

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  return (
    <div id="searchbox">
      <h1>Where are you going?</h1>
      <label htmlFor="pickup-location">Pick-up Location</label>
      <input
        type="text"
        id="pickup-location"
        name="pickup-location"
        placeholder="city, airport, station, region and district..."
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      {focus && <SearchResults query={query} />}
    </div>
  );
}

export default App;
