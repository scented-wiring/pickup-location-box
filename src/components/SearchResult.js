import React from "react";
import "../css/SearchResult.css";

const SearchResult = ({ placeType, name, region, country }) => {
  if (!placeType) {
    return <div className="SearchResult">{name}.</div>;
  } else {
    return (
      <div className="SearchResult">
        {name}. {region && region + ","} {country}
      </div>
    );
  }
};

export default SearchResult;
