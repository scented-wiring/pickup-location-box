import "./App.css";

function App() {
  return (
    <div id="searchbox">
      <h1>Where are you going?</h1>
      <label htmlFor="pickup-location">Pick-up Location</label>
      <input
        type="text"
        id="pickup-location"
        name="pickup-location"
        placeholder="city, airport, station, region and district..."
      ></input>
    </div>
  );
}

export default App;
