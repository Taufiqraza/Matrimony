import React from "react";

function Gallery() {
    return (
        <div className="bg-gray-200 pt-20 pb-40 flex flex-col items-center justify-center ">
            {/* Heading Section */}
            <div className="xl:w-2/3 w-full px-6 pt-6 text-center">
                <h1 className="sm:text-5xl font-bold leading-tight text-gray-800">
                    Connecting Hearts, Building Futures
                </h1>
                <h2 className="text-sm sm:text-base md:text-lg text-gray-600 mt-4 sm:mt-6">
                    Explore the joy of love and togetherness through our success stories. Find inspiration from the beautiful moments shared by couples who started their journey with us.
                </h2>
            </div>

            {/* Gallery Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4 lg:px-12">
                {/* Image 1 */}
                <figure className="relative group">
                    <img src="https://images.pexels.com/photos/21751236/pexels-photo-21751236/free-photo-of-smiling-woman-sitting-in-traditional-wedding-dress.jpeg" 
                        alt="Happy couple in traditional attire" 
                        className="w-full h-60 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                    />
                    <figcaption className="absolute bottom-2 left-2 bg-black/60 text-white text-xs p-1 rounded">
                        Traditional Wedding Attire
                    </figcaption>
                </figure>

                {/* Image 2 */}
                <figure className="relative group">
                    <img src="https://images.pexels.com/photos/6023737/pexels-photo-6023737.jpeg" 
                        alt="Couple exchanging rings" 
                        className="w-full h-60 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                    />
                    <figcaption className="absolute bottom-2 left-2 bg-black/60 text-white text-xs p-1 rounded">
                        Exchanging Rings
                    </figcaption>
                </figure>

                {/* Image 3 */}
                <figure className="relative group">
                    <img src="https://images.pexels.com/photos/30417956/pexels-photo-30417956/free-photo-of-close-up-of-woman-with-traditional-henna-and-jewelry.jpeg" 
                        alt="Bride with Henna & Jewelry" 
                        className="w-full h-60 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                    />
                    <figcaption className="absolute bottom-2 left-2 bg-black/60 text-white text-xs p-1 rounded">
                        Henna & Jewelry
                    </figcaption>
                </figure>

                {/* Image 4 */}
                <figure className="relative group">
                    <img src="https://images.pexels.com/photos/18694643/pexels-photo-18694643/free-photo-of-woman-in-traditional-clothing-and-veil.jpeg" 
                        alt="Bride in Traditional Veil" 
                        className="w-full h-60 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                    />
                    <figcaption className="absolute bottom-2 left-2 bg-black/60 text-white text-xs p-1 rounded">
                        Traditional Veil Look
                    </figcaption>
                </figure>

                {/* Image 5 */}
                <figure className="relative group">
                    <img src="https://images.pexels.com/photos/27876576/pexels-photo-27876576/free-photo-of-a-couple-in-traditional-indian-attire-pose-for-a-photo.jpeg" 
                        alt="Couple posing together" 
                        className="w-full h-60 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                    />
                    <figcaption className="absolute bottom-2 left-2 bg-black/60 text-white text-xs p-1 rounded">
                        Romantic Portrait
                    </figcaption>
                </figure>

                {/* Image 6 */}
                <figure className="relative group">
                    <img src="https://images.pexels.com/photos/30215067/pexels-photo-30215067/free-photo-of-elegant-indian-wedding-couple-embracing.jpeg" 
                        alt="Bride and Groom Embracing" 
                        className="w-full h-60 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                    />
                    <figcaption className="absolute bottom-2 left-2 bg-black/60 text-white text-xs p-1 rounded">
                        Elegant Wedding Embrace
                    </figcaption>
                </figure>

                {/* Image 7 */}
                <figure className="relative group">
                    <img src="https://images.pexels.com/photos/30184676/pexels-photo-30184676/free-photo-of-traditional-indian-wedding-couple-portrait.jpeg" 
                        alt="Wedding Ceremony Moment" 
                        className="w-full h-60 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                    />
                    <figcaption className="absolute bottom-2 left-2 bg-black/60 text-white text-xs p-1 rounded">
                        Wedding Ceremony
                    </figcaption>
                </figure>

                {/* Image 8 */}
                <figure className="relative group">
                    <img src="https://images.pexels.com/photos/24334710/pexels-photo-24334710/free-photo-of-woman-and-man-in-traditional-clothing-in-wedding-ceremony.jpeg" 
                        alt="Couple in wedding ceremony" 
                        className="w-full h-60 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                    />
                    <figcaption className="absolute bottom-2 left-2 bg-black/60 text-white text-xs p-1 rounded">
                        Traditional Wedding
                    </figcaption>
                </figure>

                {/* Image 9 */}
                <figure className="relative group">
                    <img src="https://images.pexels.com/photos/9604782/pexels-photo-9604782.jpeg" 
                        alt="Couple sharing a happy moment" 
                        className="w-full h-60 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                    />
                    <figcaption className="absolute bottom-2 left-2 bg-black/60 text-white text-xs p-1 rounded">
                        Happy Couple Moment
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}

export default Gallery;
