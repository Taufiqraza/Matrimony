import React from "react";
import SearchBtn from "./SearchBtn";

function Main() {
  return (
    <div>
      <div className="bg-[url('/src/assets/img/hero-img.webp')] w-screen h-screen bg-cover bg-no-repeat bg-center flex flex-col justify-start">
        <div className="flex flex-col justify-start items-center font-serif bg-white/20 py-24 gap-y-6">
          <h3 className="text-2xl text-gray-800"><span className="text-[#66451c]">#1</span> Matrimony</h3>
          <h1 className="text-6xl text-center text-gray-800">Find your <br />
           <span className="text-[#66451c] font-[400]"> Right Match </span>here</h1>
          <h4 className="text-3xl text-gray-800">Most trusted Matrimony Brand in the India</h4>
        </div>
        <div className="flex items-center justify-center bg-gradient-to-r">
          <div className="shadow-lg backdrop-blur-none bg-white/20 rounded-b-xl w-full max-w-6xl p-8">
            <form>
              <ul className="flex flex-wrap gap-4 items-center justify-between">
                {/* I'm looking for */}
                <li className="flex-1">
                  <div className="form-group">
                    <select
                      className="w-full border-gray-300 rounded-lg shadow-md  text-[#66451c] p-3 transition duration-300 font-semibold"
                    >
                      <option value="">I'm looking for</option>
                      <option value="Men">Men</option>
                      <option value="Women">Women</option>
                    </select>
                  </div>
                </li>
                {/* Age */}
                <li className="flex-1">
                  <div className="form-group">
                    <select
                      className="w-full border-gray-300 rounded-lg shadow-md  p-3 transition duration-300 text-[#66451c] font-semibold"
                    >
                      <option value="">Age</option>
                      <option value="18-30">18 to 30</option>
                      <option value="31-40">31 to 40</option>
                      <option value="41-50">41 to 50</option>
                      <option value="51-60">51 to 60</option>
                      <option value="61-70">61 to 70</option>
                      <option value="71-80">71 to 80</option>
                      <option value="81-90">81 to 90</option>
                      <option value="91-100">91 to 100</option>
                    </select>
                  </div>
                </li>
                {/* Religion */}
                <li className="flex-1">
                  <div className="form-group">
                    <select
                      className="w-full border-gray-300 rounded-lg shadow-md   p-3 transition duration-300 text-[#66451c] font-semibold"
                    >
                      <option value="">Religion</option>
                      <option value="Any">Any</option>
                      <option value="Hindu">Hindu</option>
                      <option value="Muslim">Muslim</option>
                      <option value="Jain">Jain</option>
                      <option value="Christian">Christian</option>
                    </select>
                  </div>
                </li>
                {/* City */}
                <li className="flex-1">
                  <div className="form-group">
                    <select
                      className="w-full border-gray-300 rounded-lg shadow-md  p-3 transition duration-300 text-[#66451c] font-semibold"
                    >
                      <option value="">Location</option>
                      <option value="Any location">Any location</option>
                      <option value="Chennai">Chennai</option>
                      <option value="New York">New York</option>
                      <option value="Perth">Perth</option>
                      <option value="London">London</option>
                    </select>
                  </div>
                </li>
                {/* Search Button */}
                <li className="flex-1 text-center">
                  <SearchBtn/>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;