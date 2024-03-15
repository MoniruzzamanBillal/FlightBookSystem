import React from "react";
import FeeCalculation from "./FeeCalculation";

const PriceCalculation = () => {
  return (
    <div className="PriceCalculationContainer">
      <div className="PriceCalculationWrapper bg-gray-50 shadow-md border border-gray-200 py-4 px-3 rounded-md ">
        {/* plane name starts  */}
        <div className="planeName flex items-center gap-x-3 pb-2 border-b border-gray-300 ">
          <div className="logoCOntainer h-10 w-10  ">
            <img
              src="https://i.ibb.co/b1CJwCN/biman-logo.jpg"
              className=" w-full h-full "
              alt=""
            />
          </div>
          <h1 className=" planeNAme font-medium text-gray-700 text-xl ">
            Biman Bangladesh Airlines
          </h1>
        </div>
        {/* plane name ends */}

        {/* fare caculation section startss  */}
        <div className="fareCalculation  pt-3 ">
          {/* heading starts  */}
          <h1 className=" text-lg font-semibold mb-4 "> Fare Summary</h1>
          {/* heading ends  */}

          {/* fee calculation section starts  */}
          <div className="feeCalculation">
            <FeeCalculation />
          </div>
          {/* fee calculation section ends */}

          {/* sub total calculation starts  */}
          <div className="subTotal flex justify-between items-center pt-2 ">
            <h1>Sub-total</h1>
            <h1 className=" text-lg ">BDT 17,219.00</h1>
          </div>
          {/* sub total calculation ends  */}

          {/*  */}
        </div>
        {/* fare caculation section ends  */}
      </div>
    </div>
  );
};

export default PriceCalculation;
