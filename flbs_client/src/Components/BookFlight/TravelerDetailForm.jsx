import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TravelerDetailForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="TravelerDetailFormContainer">
      <div className="TravelerDetailFormWrapper py-4 px-6  bg-gray-50 border border-gray-200 rounded-md shadow  ">
        <h1 className=" text-2xl font-medium py-2  "> Traveler 1 </h1>
        <h1 className=" text-2xl font-medium py-2 text-gray-800 ">
          Personal Details (Adult)
        </h1>

        {/* form container starts */}
        <div className="formContainer py-6 grid grid-cols-2 gap-x-8 gap-y-5  ">
          {/*first  name input starts  */}
          <div className="nameInput">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md outline-none block w-full p-2.5 "
              placeholder="First name"
              required
            />
          </div>
          {/*first  name input ends   */}

          {/*last  name input starts  */}
          <div className="nameInput">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last name
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md outline-none block w-full p-2.5 "
              placeholder="Last name"
              required
            />
          </div>
          {/*last  name input ends   */}

          {/* email input starts  */}
          <div className="emailInput">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md outline-none block w-full p-2.5 "
              placeholder="Email"
              required
            />
          </div>
          {/* email input ends  */}

          {/* contact number info starts  */}
          <div className="contactInfo">
            <div className="emailInput">
              <label
                for="contact"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Contact
              </label>
              <input
                type="number"
                id="contact"
                className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md outline-none block w-full p-2.5 "
                placeholder="Contact number"
                required
              />
            </div>
          </div>
          {/* contact number info ends  */}

          {/* date of birth input starts  */}
          <div className="dateOfBirthInput">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date of birth
            </label>
            <DatePicker
              isClearable={true}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="  border border-gray-300 outline-none rounded-md py-1 px-2  "
              placeholderText="Select a date"
            />
          </div>
          {/* date of birth input ends */}

          {/* passport number input starts  */}
          <div className="passportNumber input ">
            <label
              for="passport"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Passport Number (Optional)
            </label>
            <input
              type="number"
              id="passport"
              className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md outline-none block w-full p-2.5 "
              placeholder="Passport number"
              required
            />
          </div>
          {/* passport number input ends  */}

          {/* passport Expiry  date input starts  */}
          <div className="passportExpire input ">
            <label
              for="passport"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Passport Expiry Date (Optional)
            </label>
            <DatePicker
              selected={startDate}
              placeholderText="Select a date"
              onChange={(date) => setStartDate(date)}
              isClearable={true}
              className="  border border-gray-300 outline-none rounded-md py-1 px-2  "
            />
          </div>
          {/* passport Expiry  date input ends  */}

          {/* city input starts  */}
          <div className="cityInput">
            <label
              for="city"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md outline-none block w-full p-2.5 "
              placeholder="City"
              required
            />
          </div>
          {/* city input ends  */}

          {/* country input starts  */}
          <div className="countryInput">
            <label
              for="country"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md outline-none block w-full p-2.5 "
              placeholder="country"
              required
            />
          </div>
          {/* country input ends  */}

          {/*  */}
        </div>
        {/* form container ends  */}
      </div>
    </div>
  );
};

export default TravelerDetailForm;
