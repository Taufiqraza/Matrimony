import React from "react";

function Gallery() {
    return (
        <div className="bg-gray-50 pt-6 pb-40 flex flex-col items-center justify-center">
            <div className="xl:w-2/3 w-full px-6 pt-6">
                <h1
                    role="heading"
                    tabIndex={0}
                    className=" sm:text-5xl  font-bold leading-tight md:leading-snug text-center text-gray-800"
                >
                    Connecting Hearts, Building Futures
                </h1>
                <h2
                    role="contentinfo"
                    tabIndex={0}
                    className="text-sm sm:text-base md:text-lg leading-relaxed text-center text-gray-600 mt-4 sm:mt-6"
                >
                    Explore the joy of love and togetherness through our success stories. Find inspiration from the beautiful moments shared by couples who started their journey with us.
                </h2>
            </div>

            <div className="2xl:px-20 lg:px-12 px-4 flex flex-wrap items-start mt-4 ">
                <div className="mt-24">
                    <div className="flex items-end">
                        <img tabIndex={0} src="https://images.pexels.com/photos/21751236/pexels-photo-21751236/free-photo-of-smiling-woman-sitting-in-traditional-wedding-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Happy couple in traditional attire" className="w-30 h-40 rounded-lg mr-6" />
                        <img tabIndex={0} src="https://images.pexels.com/photos/6023737/pexels-photo-6023737.jpeg" alt="Couple exchanging rings" className="w-40 h-36 rounded-lg" />
                    </div>
                    <div className="flex items-center justify-end my-6">
                        <img tabIndex={0} src="https://images.pexels.com/photos/30417956/pexels-photo-30417956/free-photo-of-close-up-of-woman-with-traditional-henna-and-jewelry.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-60" alt="Smiling bride and groom" />
                    </div>
                    <div className="flex items-start">
                        <img tabIndex={0} src="https://images.pexels.com/photos/18694643/pexels-photo-18694643/free-photo-of-woman-in-traditional-clothing-and-veil.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Couple holding hands" className="w-48 h-54 rounded-lg" />
                        <img tabIndex={0} src="https://images.pexels.com/photos/9772228/pexels-photo-9772228.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Couple enjoying their wedding day" className="w-20 h-20 rounded-lg ml-6 flex-shrink-0 object-cover object-fit" />
                    </div>
                </div>
                <div className="ml-6 mt-32">
                    <img tabIndex={0} src="https://images.pexels.com/photos/27876576/pexels-photo-27876576/free-photo-of-a-couple-in-traditional-indian-attire-pose-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="w-72 h- rounded-lg" alt="Couple smiling in scenic background" />
                    <div className="flex items-start mt-6">
                        <img tabIndex={0} src="https://images.pexels.com/photos/30215067/pexels-photo-30215067/free-photo-of-elegant-indian-wedding-couple-embracing.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Engagement celebration" className="w-48 h-68 rounded-lg" />
                        <img tabIndex={0} src="https://images.pexels.com/photos/3872626/pexels-photo-3872626.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Bride smiling happily" className="w-20 h-20 rounded-lg ml-6 object-cover object-fit" />
                    </div>
                </div>
                <div className="mt-14 ml-6">
                    <div className="lg:flex">
                        <div>
                            <img tabIndex={0} src="https://images.pexels.com/photos/30184676/pexels-photo-30184676/free-photo-of-traditional-indian-wedding-couple-portrait.jpeg" alt="Wedding ceremony moment" className="w-96 h-full rounded-lg object-center object-fit" />
                        </div>
                        <div>
                            <div className="flex ml-6">
                                <img tabIndex={0} src="https://images.pexels.com/photos/24334710/pexels-photo-24334710/free-photo-of-woman-and-man-in-traditional-clothing-in-wedding-ceremony.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="w-20 h-20 rounded-lg mt-14" alt="Bride and groom smiling" />
                                <img tabIndex={0} src="https://images.pexels.com/photos/30184678/pexels-photo-30184678/free-photo-of-traditional-indian-wedding-ceremony-with-bride-and-groom.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-25 h-24 rounded-lg ml-6" alt="Couple posing for the camera" />
                            </div>
                            <img tabIndex={0} src="https://images.pexels.com/photos/7669989/pexels-photo-7669989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Couple enjoying their journey together" className="ml-6 mt-6 w-48 h-32 rounded-lg" />
                        </div>
                    </div>
                    <div className="mt-6 flex">
                        <img tabIndex={0} className="w-68 h-48 rounded-lg" src="https://images.pexels.com/photos/11168809/pexels-photo-11168809.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Bride looking elegant" />
                        <img tabIndex={0} className="w-72 h-56 rounded-lg ml-6" src="https://images.pexels.com/photos/9604782/pexels-photo-9604782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Couple sharing a happy moment" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
