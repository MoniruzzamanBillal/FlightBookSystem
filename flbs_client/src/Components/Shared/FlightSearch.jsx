import { useEffect, useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import { BsArrowLeftRight } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import ShowAirport from "../Home/ShowAirport";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const startsDestination = [
  {
    city: "Dhaka , Bangladesh",
    airport: "Hazrat Shahjalal International Airport",
  },
  {
    city: "Chittagong , Bangladesh",
    airport: "Shah Amanat International Airport",
  },
  {
    city: "Cox's Bazar",
    airport: "Cox's Bazar Airport",
  },
  {
    city: "Cox's Bazar",
    airport: "Cox's Bazar Airport",
  },
  {
    city: "Cox's Bazar",
    airport: "Cox's Bazar Airport",
  },
  {
    city: "Cox's Bazar",
    airport: "Cox's Bazar Airport",
  },
];

const FlightSearch = () => {
  const [showStartDestination, setShowStartDestination] = useState(false);
  const [showEndDestination, setShowEndDestination] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [departureDate, setDepartureDate] = useState(new Date());
  const [departureWeekName, setDepartureWeekName] = useState(null);
  const [returnDate, setReturnDate] = useState();
  const [returnWeekName, setReturnWeekName] = useState(null);

  const toggleStartDestination = () => {
    setShowStartDestination(!showStartDestination);
    setShowEndDestination(false);
  };

  const toggleEndDestination = () => {
    setShowEndDestination(!showEndDestination);
    setShowStartDestination(false);
  };

  // effect to get departure weekend name
  useEffect(() => {
    const depDate = new Date(departureDate);
    const dayOfWeek = depDate.getDay();
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const weekdayName = weekdays[dayOfWeek];
    setDepartureWeekName(weekdayName);
  }, [departureDate]);

  // effect to get return weekend name
  useEffect(() => {
    const retDate = new Date(returnDate);
    const dayOfWeek = retDate.getDay();
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const weekdayName = weekdays[dayOfWeek];
    setReturnWeekName(weekdayName);
  }, [returnDate]);

  //
  return (
    <div className="flightSearchFormContainer">
      <div className="flightSearchWrapper">
        {/* flight book form starts  */}
        <div className="flightBookForm bg-gray-50 border border-gray-300  w-[88%] m-auto py-10 px-5 rounded-md shadow-xl  ">
          <form
            className=" relative     "
            // onSubmit={handleSubmit(handleLogin)}
          >
            {/* form top , trip select section starts  */}
            <div className="tripSelect   flex items-center  gap-x-8 mb-4 ">
              {/* one way trip section starts  */}
              <div className="oneWayTrip  flex flex-row  items-center gap-x-2 ">
                <input
                  id="oneWay"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300  bg-gray-50   "
                  required
                />
                <label
                  htmlFor="oneWay"
                  className="text-lg font-medium text-gray-700 "
                >
                  One Way
                </label>
              </div>
              {/* one way trip section ends  */}

              {/* round trip section starts  */}
              <div className="roundTrip  flex flex-row  items-center gap-x-2 ">
                <input
                  id="roundTrip"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300  bg-gray-50   "
                  required
                />
                <label
                  htmlFor="roundTrip"
                  className=" text-lg font-medium text-gray-700 "
                >
                  Round trip
                </label>
              </div>
              {/* round trip section ends  */}

              {/*  */}
            </div>
            {/* form top , trip select section ends  */}

            {/* form bottom section starts  */}
            <div className="formBottomSection   grid grid-cols-3 gap-x-2 ">
              {/* destination input section starts  */}
              <div className="destinationContainer  flex items-center justify-between relative ">
                {/* icon container starts / */}
                <div className=" z-[10] iconContainer bg-gray-50 text-red-600 border border-red-400  font-semibold text-lg p-2 rounded-full absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 shadow-lg  ">
                  <BsArrowLeftRight />
                </div>
                {/* icon container ends  */}

                {/* starts destination section stars  */}
                <div
                  className="startDestination  w-[50%] py-2 px-7 border border-gray-400 rounded-md  cursor-pointer relative  "
                  onClick={() => toggleStartDestination()}
                >
                  <h1 className="  text-gray-700 ">From</h1>
                  <h1 className="  text-gray-900 font-medium text-xl ">
                    City name{" "}
                  </h1>
                  <h1 className="  text-gray-700 text-xs ">airport name </h1>
                  {/* airport show  */}
                  {showStartDestination && (
                    <div className="airportShowSection  absolute top-[5.6rem] left-[0rem] z-[10]   ">
                      <ShowAirport airports={startsDestination} />
                    </div>
                  )}

                  {/* airport show ends  */}
                </div>
                {/* starts destination section ends  */}

                {/* end destination section starts  */}
                <div
                  className="endDestinationContainer w-[50%] py-2 px-7 border border-gray-400 rounded-md cursor-pointer relative "
                  onClick={() => toggleEndDestination()}
                >
                  <h1 className="  text-gray-700 ">To</h1>
                  <h1 className="  text-gray-900 font-medium text-xl ">
                    City name{" "}
                  </h1>
                  <h1 className="  text-gray-700 text-xs ">airport name </h1>

                  {/* airport show  */}
                  {showEndDestination && (
                    <div className="airportShowSection  absolute top-[5.6rem] left-[0rem] z-[10]  ">
                      <ShowAirport />
                    </div>
                  )}
                  {/* airport show ends  */}
                </div>
                {/* end destination section ends  */}

                {/*  */}
              </div>
              {/* destination input section ends  */}

              {/* date ,,time section starts  */}
              <div className="timeSection  rounded-md flex justify-between items-center ">
                {/* departure time section starts  */}
                <div className="departureSection  w-[50%] py-2 px-4 border border-gray-400 rounded-l-md cursor-pointer ">
                  <div className=" flex flex-row gap-x-2  items-center text-gray-700 text-sm ">
                    <h1>Departure </h1>
                    <IoIosArrowDown />
                  </div>

                  <DatePicker
                    selected={departureDate}
                    onChange={(date) => setDepartureDate(date)}
                    dateFormat="d MMMM yyyy"
                    className="  text-xl border-none outline-none  w-full bg-gray-50 cursor-pointer font-medium "
                  />
                  {departureWeekName && (
                    <h1 className=" text-gray-700 text-xs ">
                      {departureWeekName}
                    </h1>
                  )}
                </div>
                {/* departure time section ends  */}

                {/* return time section starts  */}
                <div
                  className={` returnSection  ${
                    returnDate ? " h-auto " : " h-[5.1rem]"
                  }   w-[50%] py-2 px-4 border border-gray-400 rounded-r-md cursor-pointer    `}
                  htmlFor="dateInput "
                >
                  <div className="  flex flex-row gap-x-2  items-center text-gray-700 text-sm ">
                    <h1>Return </h1>
                    <IoIosArrowDown />
                  </div>

                  {returnDate ? (
                    <div>
                      <DatePicker
                        id="returnDate"
                        selected={returnDate}
                        onChange={(date) => setReturnDate(date)}
                        dateFormat="d MMMM yyyy"
                        className="  text-xl border-none outline-none  w-full bg-gray-50 cursor-pointer font-medium "
                      />
                      {returnWeekName && (
                        <h1 className=" text-gray-700 text-xs ">
                          {returnWeekName}
                        </h1>
                      )}
                    </div>
                  ) : (
                    <div className="  ">
                      <label
                        htmlFor="returnDate"
                        className=" cursor-pointer font-medium "
                      >
                        Tap to book return ticket
                      </label>{" "}
                      <DatePicker
                        id="returnDate"
                        selected={returnDate}
                        onChange={(date) => setReturnDate(date)}
                        dateFormat="d MMMM yyyy"
                        className=" hidden text-xl border-none outline-none  w-full bg-gray-50 cursor-pointer font-medium "
                      />{" "}
                    </div>
                  )}
                </div>
                {/* return time section ends  */}

                {/*  */}
              </div>
              {/* date ,,time section ends  */}

              {/* traavel details section starts  */}
              <div className="travelDetails  py-2 px-4 rounded-md border border-gray-400 cursor-pointer  ">
                <h1 className="  text-gray-700 text-sm ">
                  Travel and booking class{" "}
                </h1>
                <h1 className="  text-gray-900 text-lg  font-semibold ">
                  1 traveler
                </h1>
                <h1 className="  text-gray-700 text-xs  ">Economy</h1>
              </div>
              {/* traavel details section ends  */}

              {/*  */}
            </div>
            {/* form bottom section ends  */}

            {/* search button starts  */}
            <div className="searchBtn">
              <button className=" py-2 px-8 bg-[#EB1933] text-gray-50 font-medium  rounded  absolute -bottom-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2  ">
                Search
              </button>
            </div>
            {/* search button ends  */}

            {/*  */}
          </form>
        </div>
        {/* flight book form ends  */}
      </div>
    </div>
  );
};

export default FlightSearch;
