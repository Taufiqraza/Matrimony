import React from "react";
import SearchBtn from "../../components/SearchBtn";

function Hero() {
  return (
    <div className="bg-[url('/src/assets/img/hero-img.webp')] w-full h-screen bg-cover bg-no-repeat bg-center flex flex-col justify-start">
      {/* Hero Text Content */}
      <div className="flex flex-col justify-start items-center font-serif bg-white/20 py-12 px-4 sm:py-20 gap-y-4 sm:gap-y-6 text-center">
        <h3 className="text-lg sm:text-2xl text-gray-800">
          <span className="text-[#66451c]">#1</span> Matrimony
        </h3>
        <h1 className="text-3xl sm:text-5xl md:text-6xl text-gray-800 leading-tight">
          Find your <br />
          <span className="text-[#66451c] font-[400]"> Right Match </span> here
        </h1>
        <h4 className="text-lg sm:text-2xl md:text-3xl text-gray-800">
          Most trusted Matrimony Brand in India
        </h4>
      </div>

      {/* Search Section */}
      <div className="flex items-center justify-center px-4 w-full">
        <div className="shadow-lg bg-white/20 backdrop-blur-md rounded-b-xl w-full max-w-6xl p-4 sm:p-6 lg:p-8">
          <form>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* I'm looking for */}
              <li>
                <select className="w-full border-gray-300 rounded-lg shadow-md text-[#66451c] p-3 font-semibold">
                  <option value="">I'm looking for</option>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                </select>
              </li>

              {/* Age */}
              <li>
                <select className="w-full border-gray-300 rounded-lg shadow-md p-3 text-[#66451c] font-semibold">
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
              </li>

              {/* Religion */}
              <li>
                <select className="w-full border-gray-300 rounded-lg shadow-md p-3 text-[#66451c] font-semibold">
                  <option value="">Religion</option>
                  <option value="Any">Any</option>
                  <option value="Hindu">Hindu</option>
                  <option value="Muslim">Muslim</option>
                  <option value="Jain">Jain</option>
                  <option value="Christian">Christian</option>
                </select>
              </li>

              {/* Location */}
              <li>
                <select className="w-full border-gray-300 rounded-lg shadow-md p-3 text-[#66451c] font-semibold">
                  <option value="">Location</option>
                  <option value="Any location">Any location</option>
                  <option value="Chennai">Chennai</option>
                  <option value="New York">New York</option>
                  <option value="Perth">Perth</option>
                  <option value="London">London</option>
                </select>
              </li>

              {/* Search Button */}
              <li className="col-span-1 sm:col-span-2 lg:col-span-4 flex justify-center mt-4">
                <SearchBtn />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hero;
