import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    title: "Noteworthy technology acquisitions 2021",
  },
  {
    image: "https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg",
    title: "AI Advancements That Are Changing Everything",
  },
  {
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    title: "Web Development Trends You Should Know",
  },
];

const Card = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden relative">
      <div className="relative w-full h-64">
        <img
          className="w-full h-full object-cover"
          src={slides[current].image}
          alt="Blog thumbnail"
        />
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800"
        >
          <FaChevronRight />
        </button>
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {slides[current].title}
        </h5>
      </div>
    </div>
  );
};

export default Card;
