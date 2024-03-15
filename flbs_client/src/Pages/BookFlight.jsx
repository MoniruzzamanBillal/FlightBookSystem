import React from "react";
import PlaneDetail from "../Components/BookFlight/PlaneDetail";

const BookFlight = () => {
  return (
    <div className="bookflightContainer ">
      <div className="bookFlightWrapper  w-[90%] m-auto py-3 flex justify-between items-center gap-x-5  ">
        {/* flight book left container starts  */}

        <div className="bookLeftCOntainer  w-[65%] bg-gray-50 rounded-md border border-gray-200 shadow-md py-4 px-3  ">
          {/* plane detail section starts  */}
          <div className="planeDetailContainer border-b border-gray-200 py-4 ">
            <PlaneDetail />
          </div>
          {/* plane detail section ends  */}

          {/* flight detail section starts  */}
          <div className="flightDetailContainer pt-4 flex justify-evenly ">
            {/* deeparture info starts  */}
            <div className="departure  ">
              <h1 className=" departureTime text-sm text-gray-600 mb-1.5 ">
                Depart
              </h1>
              <h1 className=" departureTime font-medium  ">14:35</h1>
              <h1 className=" departureDate text-gray-600 text-sm mb-1.5 ">
                Fri, 15 Mar 2024
              </h1>
              <h1 className="  text-gray-700 text-sm font-medium ">Dhaka</h1>
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

            {/* arrival info starts  */}
            <div className="arriveInfo   ">
              <h1 className=" departureTime text-sm text-gray-600 mb-1.5 ">
                Arrive
              </h1>
              <h1 className=" departureTime font-medium  ">14:35</h1>
              <h1 className=" departureDate text-gray-600 text-sm mb-1.5 ">
                Fri, 15 Mar 2024
              </h1>
              <h1 className="  text-gray-700 text-sm font-medium  ">
                Chittagong
              </h1>
            </div>
            {/* arrival info ends  */}

            {/*  */}
          </div>
          {/* flight detail section ends  */}

          {/*  */}
        </div>

        {/* flight book left container ends  */}

        {/* flight book right container starts  */}
        <div className="flightBookRight bg-lime-200 w-[35%]  ">
          <h1>flight book right </h1>
          <h1>flight book right </h1>
          <h1>flight book right </h1>
          <h1>flight book right </h1>
        </div>
        {/* flight book right container ends  */}
      </div>
    </div>
  );
};

export default BookFlight;
