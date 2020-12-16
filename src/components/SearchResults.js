import "../css/SearchResults.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchResult from "../components/SearchResult";

const SearchResults = ({ query }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.rentalcars.com/LocationAutocomplete.do?term=${query}`)
      .then((response) => setResults(response.data.results.docs));
  }, [query]);

  if (query.length >= 2) {
    return (
      <div className="SearchResults" data-testid="SearchResults">
        {results.map((result) => (
          <div key={result.index}>
            <SearchResult
              placeType={result.placeType}
              name={result.name}
              region={result.region}
              country={result.country}
            />
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default SearchResults;
