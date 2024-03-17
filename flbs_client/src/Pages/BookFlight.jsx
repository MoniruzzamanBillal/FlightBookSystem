import React from "react";
import PlaneDetail from "../Components/BookFlight/PlaneDetail";
import PriceCalculation from "../Components/BookFlight/PriceCalculation";
import TravelerDetailForm from "../Components/BookFlight/TravelerDetailForm";

const BookFlight = () => {
  return (
    <div className="bookflightContainer py-6 ">
      <div className="bookFlightWrapper  w-[90%] m-auto  flex justify-between items-center gap-x-5  ">
        {/* flight book left container starts  */}

        <div className="bookLeftCOntainer  w-[65%]   ">
          {/* plane detail section starts  */}
          <div className="planeDetailContainer   ">
            <PlaneDetail />
          </div>
          {/* plane detail section ends  */}

          {/* traveler detail section starts  */}
          <div className="travelerDetail  mt-10 ">
            <h1 className=" text-2xl font-semibold mb-4  ">
              Enter Traveler Details{" "}
            </h1>

            {/* traveler detail form starts  */}
            <div className="travelerDetailForm ">
              <TravelerDetailForm />
            </div>
            {/* traveler detail form ends  */}

            {/* book now button starts  */}
            <div className="bookNow  mt-3 ">
              <button className=" py-2 px-5 primaryBg w-full text-gray-50 font-medium rounded-md  active:scale-95 hover:bg-red-600 ">
                Book Now
              </button>
            </div>
            {/* book now button ends  */}

            {/*  */}
          </div>
          {/* traveler detail section ends  */}

          {/*  */}
        </div>

        {/* flight book left container ends  */}

        {/* flight book right container starts  */}
        <div className="flightBookRight w-[35%]   ">
          <PriceCalculation />
        </div>
        {/* flight book right container ends  */}
      </div>
    </div>
  );
};

export default BookFlight;
