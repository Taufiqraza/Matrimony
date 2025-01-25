import React from "react";
import StoriesCard from "./StoriesCard";

function Stories() {
  return (
    <>
      <div className="container mx-auto px-4 py-24 bg-gray-700">
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
            <StoriesCard
              title="Lorem ipsum"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quam."
              img="https://images.pexels.com/photos/2586346/pexels-photo-2586346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />

            <StoriesCard
              title="Lorem ipsum"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quam."
              img="https://images.pexels.com/photos/5177796/pexels-photo-5177796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />

            <StoriesCard
              title="Lorem ipsum"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quam."
              img="https://images.pexels.com/photos/12341888/pexels-photo-12341888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
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