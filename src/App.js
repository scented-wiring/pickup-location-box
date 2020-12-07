import "./App.css";
import { useState } from "react";

function App() {
  const [focus, setFocus] = useState(false);

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
      ></input>
    </div>
  );
}

export default App;
