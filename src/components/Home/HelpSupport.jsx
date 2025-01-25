import React from "react";
import AboutSection from "./AboutSection";

function HelpSupport() {
  return (
    <>
      <div className="bg-white w-full py-40 bg-[url('https://images.pexels.com/photos/4250572/pexels-photo-4250572.jpeg')] bg-cover">
        <div className="flex flex-col items-center bg-[#e7d5b4] w-4/5 mx-auto rounded-xl py-20">
          <h2 className="text-2xl font-semibold mb-4">Find your perfect Match now</h2>
          <p className="text-gray-600 mb-6">
            Lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu fringilla. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry.
          </p>
          <div className="flex flex-row gap-4">
            <a
              href="sign-up.html"
              className="bg-[#66451c] text-black px-6 py-2 rounded hover:bg-white transition"
            >
              Register Now
            </a>
            <a
              href="sign-up.html"
              className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-600 transition"
            >
              Help & Support
            </a>
          </div>
        </div>
        <AboutSection/>
      </div>
      
    </>
  );
}

export default HelpSupport