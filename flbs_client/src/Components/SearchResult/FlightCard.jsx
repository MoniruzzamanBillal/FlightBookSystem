import React from "react";

const FlightCard = () => {
  return (
    <div className="FlightCardContainer bg-gray-50 py-3 px-5 border border-gray-100 shadow-md rounded-md   ">
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
        <div className="flightCardBottom   ">
          <h1>flight card bottom </h1>
        </div>
        {/* flight card bottom ends  */}
      </div>
    </div>
  );
};

export default FlightCard;
