import { IoIosAirplane } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const ShowAirport = ({ airports }) => {
  console.log(airports);
  return (
    <div className="airportShow bg-gray-50 w-[20rem] h-[16rem] border border-red-300  rounded-t-md overflow-auto shadow-md ">
      {/* airport show top starts   */}
      <div className="searchAirport sticky top-0 bg-gray-50 py-1 px-2  flex items-center self-center border-b border-red-400 ">
        {/* icon top starts  */}
        <FaSearch className=" text-red-600 " />
        {/* icon top ends  */}

        <input
          type="text"
          placeholder=" Type for the airport name  "
          className=" bg-gray-50 py-1 px-2  border-none outline-none text-sm w-full  "
        />

        {/*  */}
      </div>

      {/* airport show top ends    */}

      {/* show airport starts  */}
      <div className="airportShow px-1  flex items-center self-center gap-x-2  py-1  ">
        {/* top icon starts  */}
        <IoIosAirplane className=" text-red-600 font-bold  " />
        {/* top icon ends  */}

        <div className="    ">
          <h1 className=" cityName  font-medium ">Dhaka , Bangladesh</h1>
          <h1 className=" airportName  text-xs text-gray-700 ">
            {" "}
            Hazrat Shahjalal International Airport{" "}
          </h1>
        </div>

        {/*  */}
      </div>
      {/* show airport ends  */}
      {/* show airport starts  */}
      <div className="airportShow px-1  flex items-center self-center gap-x-2  py-1  ">
        {/* top icon starts  */}
        <IoIosAirplane className=" text-red-600 font-bold  " />
        {/* top icon ends  */}

        <div className="    ">
          <h1 className=" cityName  font-medium ">Dhaka , Bangladesh</h1>
          <h1 className=" airportName  text-xs text-gray-700 ">
            {" "}
            Hazrat Shahjalal International Airport{" "}
          </h1>
        </div>

        {/*  */}
      </div>
      {/* show airport ends  */}
      {/* show airport starts  */}
      <div className="airportShow px-1  flex items-center self-center gap-x-2  py-1  ">
        {/* top icon starts  */}
        <IoIosAirplane className=" text-red-600 font-bold  " />
        {/* top icon ends  */}

        <div className="    ">
          <h1 className=" cityName  font-medium ">Dhaka , Bangladesh</h1>
          <h1 className=" airportName  text-xs text-gray-700 ">
            {" "}
            Hazrat Shahjalal International Airport{" "}
          </h1>
        </div>

        {/*  */}
      </div>
      {/* show airport ends  */}
      {/* show airport starts  */}
      <div className="airportShow px-1  flex items-center self-center gap-x-2  py-1  ">
        {/* top icon starts  */}
        <IoIosAirplane className=" text-red-600 font-bold  " />
        {/* top icon ends  */}

        <div className="    ">
          <h1 className=" cityName  font-medium ">Dhaka , Bangladesh</h1>
          <h1 className=" airportName  text-xs text-gray-700 ">
            {" "}
            Hazrat Shahjalal International Airport{" "}
          </h1>
        </div>

        {/*  */}
      </div>
      {/* show airport ends  */}
      {/* show airport starts  */}
      <div className="airportShow px-1  flex items-center self-center gap-x-2  py-1  ">
        {/* top icon starts  */}
        <IoIosAirplane className=" text-red-600 font-bold  " />
        {/* top icon ends  */}

        <div className="    ">
          <h1 className=" cityName  font-medium ">Dhaka , Bangladesh</h1>
          <h1 className=" airportName  text-xs text-gray-700 ">
            {" "}
            Hazrat Shahjalal International Airport{" "}
          </h1>
        </div>

        {/*  */}
      </div>
      {/* show airport ends  */}
      {/* show airport starts  */}
      <div className="airportShow px-1  flex items-center self-center gap-x-2  py-1  ">
        {/* top icon starts  */}
        <IoIosAirplane className=" text-red-600 font-bold  " />
        {/* top icon ends  */}

        <div className="    ">
          <h1 className=" cityName  font-medium ">Dhaka , Bangladesh</h1>
          <h1 className=" airportName  text-xs text-gray-700 ">
            {" "}
            Hazrat Shahjalal International Airport{" "}
          </h1>
        </div>

        {/*  */}
      </div>
      {/* show airport ends  */}
      {/* show airport starts  */}
      <div className="airportShow px-1  flex items-center self-center gap-x-2  py-1  ">
        {/* top icon starts  */}
        <IoIosAirplane className=" text-red-600 font-bold  " />
        {/* top icon ends  */}

        <div className="    ">
          <h1 className=" cityName  font-medium ">Dhaka , Bangladesh</h1>
          <h1 className=" airportName  text-xs text-gray-700 ">
            {" "}
            Hazrat Shahjalal International Airport{" "}
          </h1>
        </div>

        {/*  */}
      </div>
      {/* show airport ends  */}

      {/* airport show top ends  */}
    </div>
  );
};

export default ShowAirport;
