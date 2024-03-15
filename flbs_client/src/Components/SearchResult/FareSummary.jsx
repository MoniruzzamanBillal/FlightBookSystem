import React from "react";

const FareSummary = () => {
  return (
    <div className="FareSummaryContainer">
      <div className="FareSummaryWrapper border border-gray-400  ">
        {/* heading starts  */}
        <div className="Fareheading border-b border-gray-400 ">
          <h1 className=" p-2 text-2xl font-medium ">Fare breakdown</h1>
        </div>
        {/* heading ends  */}

        {/* fare table container starts  */}
        <div className="fareTableContainer px-2 py-4 ">
          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right   ">
              {/* table header starts  */}

              <thead class="text-xs text-gray-600 uppercase bg-gray-50   ">
                <tr>
                  <th scope="col" class="px-6 py-3 border border-gray-400 ">
                    Fare Summary
                  </th>
                  <th scope="col" class="px-6 py-3 border border-gray-400  ">
                    Base Fare
                  </th>
                  <th scope="col" class="px-6 py-3 border border-gray-400  ">
                    Taxes + Fees
                  </th>
                  <th scope="col" class="px-6 py-3 border border-gray-400   ">
                    Per Passenger
                  </th>
                  <th scope="col" class="px-6 py-3 border border-gray-400   ">
                    Total
                  </th>
                </tr>
              </thead>
              {/* table header ends   */}

              {/* table body  starts  */}

              <tbody className=" text-gray-500  ">
                <tr class=" bg-white text-sm  ">
                  <td class="px-3 py-2 border border-gray-300">Adult</td>
                  <td class="px-3 py-2 border border-gray-300">BDT 2,342</td>
                  <td class="px-3 py-2 border border-gray-300"> BDT 986</td>
                  <td class="px-3 py-2 border border-gray-300">
                    BDT (3,328 x 1)
                  </td>
                  <td class="px-3 py-2 font-medium border border-gray-300 text-gray-800 ">
                    BDT 3,328
                  </td>
                </tr>
                {/*  */}

                <tr class=" bg-white text-sm  ">
                  <td class="px-3 py-2 border border-gray-300 text-gray-700 font-medium  ">
                    Total(1 traveler)
                  </td>
                  <td class="px-3 py-2 border border-gray-300"></td>
                  <td class="px-3 py-2 border border-gray-300"> </td>
                  <td class="px-3 py-2 border border-gray-300"></td>
                  <td class="px-3 py-2 font-medium border border-gray-300 text-gray-800 ">
                    BDT 3,328
                  </td>
                </tr>

                {/*  */}
              </tbody>
              {/* table body  ends   */}
            </table>
          </div>
        </div>
        {/* fare table container ends  */}

        {/*  */}
      </div>
    </div>
  );
};

export default FareSummary;
