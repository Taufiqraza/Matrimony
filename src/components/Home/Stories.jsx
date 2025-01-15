import React from "react";

function Stories() {
  return (
    <>
      <div className="container mx-auto px-4 py-24 bg-[#66451c]">
        <div className="text-center mb-12 pt-5">
          <h2 className="text-3xl font-bold text-white mb-4">
            Inspiring Stories from Our Couples
          </h2>
          <p className="text-lg text-white">
            Thousands of couples have found their match on Sangam.com. Here's a glimpse of their beautiful journeys.
          </p>
        </div>

        <div className="flex items-center justify-center space-x-4 overflow-x-auto">
          <button className="p-2 rounded-full bg-white text-black font-extrabold shadow-lg hover:bg-[#e7d5b4] transition">
            &#60;
          </button>

          <div className="flex space-x-6">
            <div className="max-w-sm bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
              <img
                src="https://images.pexels.com/photos/2586346/pexels-photo-2586346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Couple"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Lorem ipsum
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quam.
                </p>
                <p className="text-blue-500 mt-4 cursor-pointer hover:text-blue-700">
                  Read More
                </p>
              </div>
            </div>

            <div className="max-w-sm bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
              <img
                src="https://images.pexels.com/photos/5177796/pexels-photo-5177796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Couple"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Lorem ipsum
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quam.
                </p>
                <p className="text-blue-500 mt-4 cursor-pointer hover:text-blue-700">
                  Read More
                </p>
              </div>
            </div>

            <div className="max-w-sm bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
              <img
                src="https://images.pexels.com/photos/12341888/pexels-photo-12341888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Couple"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Lorem ipsum
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quam.
                </p>
                <p className="text-blue-500 mt-4 cursor-pointer hover:text-blue-700">
                  Read More
                </p>
              </div>
            </div>
          </div>

          <button className="p-2 rounded-full bg-white text-black font-extrabold shadow-lg hover:bg-[#e7d5b4] transition">
            &#62;
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
        </div>
      </div>

    </>
  );
}

export default Stories;