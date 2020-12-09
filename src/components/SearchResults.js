import "../css/SearchResults.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchResults = ({ query }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.rentalcars.com/LocationAutocomplete.do?term=${query}`)
      .then((response) => setResults(response.data.results.docs));
  });

  return (
    <div className="SearchResults">
      <p>Test</p>
    </div>
  );
};

export default SearchResults;
