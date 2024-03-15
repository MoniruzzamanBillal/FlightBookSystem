import React from "react";

const FeeCalculation = () => {
  return (
    <div className="FeeCalculationContainer">
      <div className="FeeCalculationWrapper border-b border-gray-400 pt-2  ">
        {/* heading  */}
        <h1 className=" text-lg mb-5 ">Adult (2 travelers)</h1>
        {/* heading */}

        {/* base fare calculation starts  */}
        <div className="baseFaresection flex justify-between pb-2   ">
          {/* base fare left starts  */}
          <div className="baseFareLeft">
            <h1 className="  ">Base Fare</h1>
          </div>
          {/* base fare left ends  */}

          {/* base fare right starts */}
          <div className="baseFareEnds">
            <h1 className="  ">BDT 4,686</h1>
            <h1 className=" text-sm text-end ">( 2 x 2,343 )</h1>
          </div>
          {/* base fare right ends  */}
        </div>
        {/* base fare calculation ends  */}

        {/*  */}

        {/* tax fees calculation starts  */}
        <div className="baseFaresection flex justify-between pb-2   ">
          {/* base fare left starts  */}
          <div className="baseFareLeft">
            <h1 className="   ">Taxes + Fees</h1>
          </div>
          {/* base fare left ends  */}

          {/* base fare right starts */}
          <div className="baseFareEnds">
            <h1 className="  ">BDT 1,971</h1>
            <h1 className=" text-sm text-end ">( 2 x 985.5 )</h1>
          </div>
          {/* base fare right ends  */}
        </div>
        {/* tax fees calculation ends  */}

        {/*  */}
      </div>
    </div>
  );
};

export default FeeCalculation;
