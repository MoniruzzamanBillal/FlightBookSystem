import React from "react";

const PlaneDetail = () => {
  return (
    <div className="PlaneDetailContainer">
      <div className="PlaneDetailWraqpper    ">
        {/* plane detail top starts  */}
        <div className="detailTop   flex justify-between items-center    ">
          {/* detail left starts  */}
          <div className="detailLeft  flex justify-between items-center gap-x-4  ">
            {/* left logo starts  */}
            <div className="leftLogo h-12 w-12   ">
              <img
                src="https://i.ibb.co/b1CJwCN/biman-logo.jpg"
                className=" w-full h-full "
                alt=""
              />
            </div>
            {/* left logo ends  */}

            {/* right detail starts  */}
            <div className="planedetails">
              <h1 className="  airlineName text-sm text-gray-600 pb-2 ">
                Biman Bangladesh Airlines
              </h1>

              <h1 className=" planeName text-lg font-medium pb-1 ">BG | 127</h1>
              <div className="planeModel  text-xs font-medium  flex justify-between items-center gap-x-4 ">
                <h1>Aircraft : Boeing 737-800</h1>
                <h1>Operated by : BG</h1>
              </div>
            </div>
            {/* right detail ends  */}
          </div>
          {/* detail left ends  */}

          {/* detail right starts  */}
          <div className="detailRight text-gray-500 ">
            <h1>Economy Class </h1>
          </div>
          {/* detail right ends  */}
        </div>
        {/* plane detail top ends  */}
      </div>
    </div>
  );
};

export default PlaneDetail;
