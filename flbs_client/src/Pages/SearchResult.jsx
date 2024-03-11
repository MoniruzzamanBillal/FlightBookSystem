import React from "react";
import FlightSearch from "../Components/Shared/FlightSearch";

const SearchResult = () => {
  return (
    <div className="searchResultContainer  ">
      <div className="searchResultWrapper  w-[90%] m-auto py-3 ">
        {/* flight search fform starts  */}
        <div className="flightSearchFormSection  py-6 ">
          <FlightSearch />
        </div>
        {/* flight search fform ends  */}
        {/*  */}

        {/* search result container starts  */}
        <div className="searchResult  py-6  flex justify-between items-center self-center gap-x-3    ">
          {/* search result left starts  */}
          <div className="searchLeft bg-gray-50 border border-gray-100 w-[33%] rounded-md shadow-md p-2  ">
            {/* price filter starts  */}
            <div className="priceFilter bg-red-200 border-b border-gray-200 ">
              <h1>price filter </h1>
              <h1>price filter </h1>
              <h1>price filter </h1>
              <h1>price filter </h1>
            </div>
            {/* price filter ends  */}
          </div>
          {/* search result left ends  */}
          {/*  */}

          {/* search right  starts  */}
          <div className="searchRight bg-sky-300 w-[67%] rounded-md shadow-md p-2  ">
            <h1>search right </h1>
            <h1>search right </h1>
            <h1>search right </h1>
            <h1>search right </h1>
          </div>
          {/* search right  ends  */}
        </div>
        {/* search result container ends  */}
      </div>
    </div>
  );
};

export default SearchResult;
