import React from "react";
import { GoVerified } from "react-icons/go";
import { FaPeopleRoof } from "react-icons/fa6";
import { TbWorldSearch } from "react-icons/tb";
import { IoShieldCheckmarkSharp } from 'react-icons/io5';

const FeatureSection = () => {
  return (
    <div className="flex flex-col h-auto items-center justify-center bg-[#f4eee4] py-20 px-10">
      {/* Section Container */}
      <div className="mx-auto">
        {/* Section Content */}
        <div className="flex flex-row justify-center items-center md:grid-cols-2 gap-8 mx-4 px-16 w-full">
          {/* Left Content */}
          <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-[#66451c]">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Authentic Profiles | Secure Platform | Easy Communication
            </p>
          </div>
            {/* Benefit 1 */}
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16">
                <GoVerified className="text-5xl text-[#66451c]" />
              </div>
              <div className="px-4">
                <h4 className="text-xl font-semibold text-[#66451c]">
                  Verified Profiles for Peace of Mind
                </h4>
                <p className="text-gray-600 mt-2">
                  We ensure the profiles on our platform are verified with
                  government IDs, such as Aadhar card, PAN, and Driving License.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16">
                <FaPeopleRoof className="text-5xl text-[#66451c]" />
              </div>
              <div className="px-4">
                <h4 className="text-xl font-semibold text-[#66451c]">
                  Community Matches with Comprehensive Details
                </h4>
                <p className="text-gray-600 mt-2">
                  Discover matches with detailed family backgrounds, helping
                  you find a partner who truly fits your values and culture.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16">
                <TbWorldSearch className="text-5xl text-[#66451c]" />
              </div>
              <div className="px-4">
                <h4 className="text-xl font-semibold text-[#66451c]">
                  No Language Barriers in Your Search
                </h4>
                <p className="text-gray-600 mt-2">
                  Find your perfect match in your preferred language with our
                  multilingual support.
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16">
                <IoShieldCheckmarkSharp className="text-5xl text-[#66451c]" />
              </div>
              <div className="px-4">
                <h4 className="text-xl font-semibold text-[#66451c]">
                  Data Security and Privacy
                </h4>
                <p className="text-gray-600 mt-2">
                  Your data is our priority. We provide a secure platform to
                  ensure your personal information is protected at all times.
                </p>
              </div>
            </div>

            {/* Benefit 5 */}
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16">
                <GoVerified className="text-5xl text-[#66451c]" />
              </div>
              <div className="px-4">
                <h4 className="text-xl font-semibold text-[#66451c]">
                  Authentic Communication Channels
                </h4>
                <p className="text-gray-600 mt-2">
                  We ensure genuine connections with secure messaging and video
                  calling features to help you communicate without any worries.
                </p>
              </div>
            </div>

          </div>

          {/* Right Content:img */}
          <div className="relative">
            <div className="w-full h-screen relative group flex justify-center items-center">
              <img
                src="https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Promotional Video"
                className="rounded-lg shadow-md cursor-pointer transition-transform duration-300 transform group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default FeatureSection;
