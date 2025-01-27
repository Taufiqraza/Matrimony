import React from "react";

const Stories = () => {
    return (
        <div className="mx-auto container flex justify-center items-center py-24 sm:px-6 2xl:px-0">
            <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 px-36">
                <div className="w-60 sm:w-auto flex flex-col justify-start items-start">
                    <div>
                        <p className="text-3xl xl:text-4xl  sm:text-5xl  font-bold leading-tight md:leading-snug text-center text-gray-800">Our Successfull Stories</p>
                    </div>
                    <div className="mt-4 lg:w-2/3 xl:w-3/5">
                        <p className="text-base leading-6 text-gray-600">We take pride in bringing together couples who share a deep connection. Our success stories are a testament to the trust, love, and commitment that flourish through our platform. </p>
                    </div>
                    <div className="mt-16 w-full">
                        <button className="px-4 bg-[#66451c] flex justify-between items-center w-full lg:w-72 h-14 text-white hover:bg-gray-700">
                            <p className="text-xl font-medium leading-5">See More</p>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.66663 16H25.3333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 21.3333L25.3333 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 10.6667L25.3333 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row jusitfy-center items-center sm:space-x-2 xl:space-x-8 space-y-4 sm:space-y-0">
                    <div>
                        <img className="hidden lg:block" src="https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg?auto=compress&cs=tinysrgb&w=600" alt="sofa" />
                        <img className="w-80 sm:w-auto lg:hidden" src="https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg?auto=compress&cs=tinysrgb&w=600" alt="sofa" />
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-4 sm:space-y-5 lg:space-y-5 xl:space-y-8">
                        <div>
                            <img className="hidden lg:block" width="620px" src="https://images.pexels.com/photos/3872606/pexels-photo-3872606.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="chairs" />
                            <img className="w-80 sm:w-auto lg:hidden"  src="https://images.pexels.com/photos/3872606/pexels-photo-3872606.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="chairs" />
                        </div>
                        <div>
                            <img className="hidden lg:block" width="620px"  src="https://images.pexels.com/photos/9778787/pexels-photo-9778787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="chairs" />
                            <img className="w-80 sm:w-auto lg:hidden" src="https://images.pexels.com/photos/9778787/pexels-photo-9778787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="chairs" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stories;
