import React from "react";
import FlightSearch from "../Components/Shared/FlightSearch";
import DepartureTimes from "../Components/SearchResult/DepartureTimes";
import { WiSunrise } from "react-icons/wi";
import { IoSunnyOutline } from "react-icons/io5";
import { BsFillSunsetFill } from "react-icons/bs";
import CheckBoxComponent from "../Components/SearchResult/CheckBoxComponent";

const planeTimes = [
  {
    icon: <WiSunrise />,
    dayPart: "Morning",
    time: "6-11:59",
  },
  {
    icon: <IoSunnyOutline />,
    dayPart: "After noon",
    time: "12-17:59",
  },
  {
    icon: <BsFillSunsetFill />,
    dayPart: "Evening",
    time: "18-23:59",
  },
];

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
            {/* departure time starts  */}
            <div className="departureTime  border-b border-gray-400 py-2 ">
              <h1 className=" text-lg font-semibold mb-2 ">
                Departure time in dhaka
              </h1>

              <div className="departureTimeContainer  grid grid-cols-2 gap-x-4 gap-y-2   ">
                {planeTimes &&
                  planeTimes.map((departureTime, ind) => (
                    <DepartureTimes key={ind} departureTime={departureTime} />
                  ))}
              </div>
            </div>
            {/* departure time ends  */}

            {/* baggage allowance container starts  */}
            <div className="baggageContainer  border-b border-gray-400 py-2 ">
              <CheckBoxComponent />
            </div>
            {/* baggage allowance container ends  */}

            {/* refundable container starts  */}
            <div className="refundableContainer  bg-blue-200 border-b border-gray-400 py-2  ">
              <h1>refundable container </h1>
              <h1>refundable container </h1>
            </div>
            {/* refundable container ends   */}

            {/* airline container starts  */}
            <div className="airlineContainer bg-gray-200 border-b border-gray-400 py-2  ">
              <h1>airlines</h1>
              <h1>airlines</h1>
            </div>
            {/* airline container ends  */}

            {/*  */}
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
