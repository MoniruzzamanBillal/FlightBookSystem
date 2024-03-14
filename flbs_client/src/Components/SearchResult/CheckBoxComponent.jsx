import React from "react";

const CheckBoxComponent = () => {
  return (
    <div className="CheckBoxComponentContainer">
      <div className="CheckBoxComponentWrapper">
        {/* heading starts  */}
        <h1 className=" font-medium text-lg mb-2 ">Baggage allowance</h1>
        {/* heading ends  */}

        {/* input container starts  */}
        <div className="inputContainer flex items-center gap-x-1.5  ">
          <input type="checkbox" name="" id="allowance" />
          <label htmlFor="allowance">20 KG</label>
        </div>
        {/* input container endss  */}

        {/*  */}
      </div>
    </div>
  );
};

export default CheckBoxComponent;
