import React from "react";

const Stories = () => {
    return (
        <div className="mx-auto max-w-screen-xl py-24 px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Text Section */}
                <div className="text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                        Our Successful Stories
                    </h2>
                    <p className="mt-4 text-gray-600">
                        We take pride in bringing together couples who share a deep connection.
                        Our success stories are a testament to the trust, love, and commitment that flourish through our platform.
                    </p>
                    <div className="mt-8">
                        <button className="px-6 py-3 bg-[#66451c] text-white text-lg font-medium rounded-md hover:bg-[#553d1a] transition">
                            See More
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    <img
                        className="w-full h-auto rounded-md shadow-md"
                        src="https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Couple 1"
                    />
                    <div className="flex flex-col gap-4 sm:gap-6">
                        <img
                            className="w-full h-auto rounded-md shadow-md"
                            src="https://images.pexels.com/photos/3872606/pexels-photo-3872606.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Couple 2"
                        />
                        <img
                            className="w-full h-auto rounded-md shadow-md"
                            src="https://images.pexels.com/photos/9778787/pexels-photo-9778787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Couple 3"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stories;
