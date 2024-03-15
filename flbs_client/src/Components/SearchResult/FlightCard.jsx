import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import FlightDetail from "./FlightDetail";
import FareSummary from "./FareSummary";
import FareRules from "./FareRules";

const FlightCard = () => {
  const [openFlightDetail, setFlightDetail] = useState(false);
  const [showFlightDetail, setShowFlightDetail] = useState(true);
  const [showFareSummary, setShowFareSummary] = useState(false);
  const [showFareRules, setShowFareRules] = useState(false);

  const handleShowFlightDetails = () => {
    if (openFlightDetail && showFlightDetail) {
      setShowFlightDetail(true);
    } else {
      setShowFlightDetail(!showFlightDetail);
    }

    setShowFareSummary(false);
    setShowFareRules(false);
  };

  const handleShowFareSummary = () => {
    if (openFlightDetail && showFareSummary) {
      setShowFareSummary(true);
    } else {
      setShowFareSummary(!showFareSummary);
    }

    setShowFlightDetail(false);
    setShowFareRules(false);
  };

  const handleShowFareRules = () => {
    if (openFlightDetail && showFareRules) {
      setShowFareRules(true);
    } else {
      setShowFareRules(!showFareRules);
    }

    setShowFlightDetail(false);
    setShowFareSummary(false);
  };

  return (
    <div className="FlightCardContainer bg-gray-50 py-3 px-5 border border-gray-100 shadow-md rounded-md my-6   ">
      <div className="FlightCardWrapper">
        {/* flight card top starts  */}
        <div className="flightCardTop mb-8 flex justify-between items-center self-center   ">
          {/* airline logo starts  */}
          <div className="airlineLogo  flex flex-col justify-center items-center gap-y-1  ">
            {/* */}
            <div className="logoContainer w-[3rem] h-[3rem]  ">
              <img
                src="https://i.ibb.co/d0p4wQy/biman-logo.jpg "
                alt=""
                className=" w-full h-full "
              />
            </div>

            <h1 className=" text-sm text-gray-600 ">
              Biman Bangladesh Airlines{" "}
            </h1>
          </div>
          {/* airline logo ends  */}

          {/* depart time starts  */}
          <div className="departTimeContainer  flex flex-col gap-y-0.5   ">
            {/* heading starts  */}
            <h1 className=" text-sm text-gray-600 ">Depart</h1>
            {/* heading ends   */}

            {/* start time starts  */}
            <h1 className=" font-medium text-lg text-gray-700 ">15:40</h1>
            {/* start time end s */}

            {/* start date starts  */}
            <h1 className=" text-xs text-gray-500 ">Thu, 14 Mar 2024</h1>
            {/* start date ends  */}

            {/* start place starts  */}
            <h1 className=" text-gray-500  ">Dhaka (DAC)</h1>
            {/* start place ends  */}

            {/*  */}
          </div>
          {/* depart time ends  */}

          {/* travel time container starts  */}
          <div className="travelTimeContainer  flex flex-col justify-center items-center  ">
            {/* travel time starts  */}
            <h1 className=" text-sm text-gray-500 ">45 minutes</h1>
            {/* travel time ends  */}

            <div className="iconContainer">
              <img
                src="https://i.ibb.co/8dXwmxt/non-stop-shape-removebg-preview.png"
                alt=""
              />
            </div>
          </div>
          {/* travel time container ends  */}

          {/* arrive time container starts   */}
          <div className="arriveTimeContainer flex flex-col gap-y-0.5   ">
            {/* heading starts  */}
            <h1 className=" text-sm text-gray-600 ">Arrive</h1>
            {/* heading ends   */}

            {/* start time starts  */}
            <h1 className=" font-medium text-lg text-gray-700 ">16:25</h1>
            {/* start time end s */}

            {/* start date starts  */}
            <h1 className=" text-xs text-gray-500 ">Thu, 14 Mar 2024</h1>
            {/* start date ends  */}

            {/* start place starts  */}
            <h1 className=" text-gray-500  ">Chittagong (CGP)</h1>
            {/* start place ends  */}

            {/*  */}
          </div>
          {/* arrive time container ends */}

          {/*  */}
        </div>
        {/* flight card top ends   */}
        {/*  */}

        {/* flight card bottom starts  */}
        <div className="flightCardBottom flex justify-between items-center    ">
          {/* left section starts  */}
          <div className="leftSection   ">
            <h1 className=" text-gray-600 text-sm ">Price </h1>
            {/* price section starts  */}
            <h1 className="  text-lg font-medium text-gray-600 ">BDT 4,732</h1>
            {/* price section ends  */}
            {/* refund section starts  */}
            <h1 className=" text-green-700 text-sm font-medium ">
              Partially Refundable
            </h1>
            {/* refund section ends  */}
            {/*  */}
          </div>
          {/* left section ends  */}

          {/* right section starts  */}
          <div className="rightSection   ">
            {/* button container starts  */}
            <div className="BookBtn mb-2 ">
              <button className=" primaryBg hover:bg-red-600 py-2 px-4 rounded-md text-gray-50 hover:text-gray-100 active:scale-95 font-medium  ">
                Book Now
              </button>
            </div>
            {/* button container ends  */}

            {/* flight details button starts  */}
            <div
              className="detailsBtn flex justify-center items-center gap-x-1 primaryText font-medium cursor-pointer  "
              onClick={() => setFlightDetail(!openFlightDetail)}
            >
              <h1 className="   ">Flight Details </h1>
              {openFlightDetail ? (
                <FaAngleDown className="  " />
              ) : (
                <FaAngleUp className="  " />
              )}
            </div>
            {/* flight details button ends  */}
            {/*  */}
          </div>
          {/* right section ends  */}
          {/*  */}
        </div>
        {/* flight card bottom ends  */}

        {/* flight detail container starts  */}
        <div
          className={`${
            openFlightDetail ? "block" : "hidden"
          }   flightDetailContainer mt-3 pt-2 border-t border-gray-300 transition-all duration-300`}
        >
          {/* flight detail top section starts  */}
          <div className="detailTopSection flex items-center py-2  mb-3  ">
            <p
              onClick={() => handleShowFlightDetails()}
              className={` ${
                showFlightDetail ? " primaryBg text-gray-50 " : "  "
              } cursor-pointer px-3 py-1 border border-gray-400  font-medium  `}
            >
              Flight Details
            </p>
            <p
              onClick={() => handleShowFareSummary()}
              className={` ${
                showFareSummary ? " primaryBg text-gray-50 " : "  "
              } cursor-pointer  px-3 py-1 border border-gray-400  font-medium `}
            >
              Fare Summary{" "}
            </p>
            <p
              onClick={() => handleShowFareRules()}
              className={` ${
                showFareRules ? " primaryBg text-gray-50 " : "  "
              } cursor-pointer px-3 py-1 border border-gray-400  font-medium `}
            >
              Fare Rules
            </p>
          </div>
          {/* flight detail top section ends   */}

          {/* flight detail container starts  */}
          {showFlightDetail && (
            <div className="flightDetailContainer">
              <FlightDetail />
            </div>
          )}
          {/* flight detail container ends  */}

          {/* fare summary container starts  */}
          {showFareSummary && (
            <div className="fareSummaryContainer  ">
              <FareSummary />
            </div>
          )}

          {/* fare summary container ends  */}

          {/* fare rules container starts  */}

          {showFareRules && (
            <div className="fareRulesContainer   ">
              <FareRules />
            </div>
          )}

          {/* fare rules container ends  */}

          {/*  */}
        </div>
        {/* flight detail container ends  */}
      </div>
    </div>
  );
};

export default FlightCard;
