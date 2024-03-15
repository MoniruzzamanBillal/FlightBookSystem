import React from "react";
import PlaneDetail from "../Components/BookFlight/PlaneDetail";
import PriceCalculation from "../Components/BookFlight/PriceCalculation";

const BookFlight = () => {
  return (
    <div className="bookflightContainer ">
      <div className="bookFlightWrapper  w-[90%] m-auto py-3 flex justify-between items-center gap-x-5  ">
        {/* flight book left container starts  */}

        <div className="bookLeftCOntainer  w-[65%]   ">
          {/* plane detail section starts  */}
          <div className="planeDetailContainer   ">
            <PlaneDetail />
          </div>
          {/* plane detail section ends  */}

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
