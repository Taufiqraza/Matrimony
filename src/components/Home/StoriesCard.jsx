import React from "react";

function StoriesCard(props) {
  return (
    <div className="max-w-sm bg-[#f4eee4] rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
      <img
        src={props.img}
        alt="Couple"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-[#66451c]">
          {props.title}
        </h3>
        <p className="text-sm text-gray-500 mt-2">
          {props.content}
        </p>
        <p className="text-[#66451c] mt-4 cursor-pointer hover:text-gray-800">
          Read More
        </p>
      </div>
    </div>
  );
}

export default StoriesCard;