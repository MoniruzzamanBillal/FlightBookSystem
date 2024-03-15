import React from "react";

const FlightDetail = () => {
  return (
    <div className="FlightDetailContainer">
      <div className="FlightDetailWrapper    border border-gray-300  ">
        {/* destination name starts  */}
        <div className="destinationCOntainer border-b border-gray-300 ">
          <h1 className=" p-2 text-2xl font-medium ">
            Dhaka to Chittagong , 16 Mar 2024{" "}
          </h1>
        </div>
        {/* destination name ends  */}

        {/* detail body starts  */}
        <div className="detailContainer  px-2 py-3 ">
          {/* plane info starts  */}
          <div className="planeInfo  flex justify-start   gap-x-2 mb-9 ">
            {/* plane info left starts  */}
            <div className="planeInfoLeft  ">
              <div className="planeLogo  w-12 h-12 ">
                <img
                  src="https://i.ibb.co/d0p4wQy/biman-logo.jpg"
                  className=" w-full h-full "
                />
              </div>
            </div>
            {/* plane info left ends  */}
            {/*  */}
            {/* plane info right starts  */}
            <div className="planeInfoRight  font-medium ">
              <h1 className="   ">Biman Bangladesh Airlines BG | 135</h1>
              <h1 className=" text-sm text-gray-800 ">
                Aircraft : Boeing 777-300
              </h1>
              <h1 className=" text-sm text-gray-800 ">Operated by : BG</h1>
              <h1 className=" text-sm text-gray-800 ">Economy (G)</h1>
              <h1 className=" text-xs text-gray-800 ">Available seats: 9</h1>
            </div>
            {/* plane info right ends  */}
          </div>
          {/* plane info ends  */}

          {/* detail info starts  */}

          <div className="detailBody  flex justify-evenly     ">
            {/* deeparture info starts  */}
            <div className="departure  ">
              <h1 className=" departureTime font-medium mb-1 ">14:35</h1>
              <h1 className=" departureDate text-gray-600 text-sm ">
                Fri, 15 Mar 2024
              </h1>
              <h1 className="  text-gray-600 text-sm ">Terminal -</h1>
              <h1 className=" airportName text-gray-600 text-xs ">
                Airport name{" "}
              </h1>
              <h1 className=" cityName text-gray-600 text-xs ">city name </h1>
            </div>
            {/* deeparture info ends  */}

            {/* flight duration info starts  */}
            <div className="flightDurationInfo  flex flex-col justify-center items-center  ">
              <h1 className=" flightDuration text-gray-700 text-sm text-center ">
                45 minutes{" "}
              </h1>
              <img
                src="https://i.ibb.co/8dXwmxt/non-stop-shape-removebg-preview.png"
                alt=""
              />
            </div>
            {/* flight duration info ends  */}

            {/* arrive info starts  */}
            <div className="arriveInfo   ">
              <h1 className=" arrivalTime font-medium mb-1 ">14:35</h1>
              <h1 className=" arrivalDate text-gray-600 text-sm ">
                Fri, 15 Mar 2024
              </h1>
              <h1 className="  text-gray-700 text-sm ">Terminal -</h1>
              <h1 className=" airportName text-gray-600 text-xs ">
                Airport name{" "}
              </h1>
              <h1 className=" cityName text-gray-600 text-xs ">city name </h1>
            </div>
            {/* arrive info ends  */}

            {/* baggage info starts  */}
            <div className="baggageInfo b   ">
              <h1 className=" font-medium mb-1 ">Baggage</h1>
              <h1 className=" text-gray-600 text-sm ">Adult</h1>
            </div>
            {/* baggage info ends  */}

            {/* check in info starts  */}
            <div className="checkInInfo   ">
              <h1 className="  font-medium  ">Check In</h1>
              <h1 className=" baggageLimit text-sm text-gray-600  ">
                20 Kg(s)
              </h1>
            </div>
            {/* check in info ends  */}

            {/* cabin info starts  */}
            <div className="cabinInfo   ">
              <h1 className="  font-medium  ">Cabin</h1>
              <h1 className=" text-gray-600 text-sm  ">7 Kg(s)</h1>
            </div>
            {/* cabin info ends  */}
          </div>

          {/* detail info info  */}

          {/*  */}
        </div>
        {/* detail body ends  */}

        {/*  */}
      </div>
    </div>
  );
};

export default FlightDetail;
