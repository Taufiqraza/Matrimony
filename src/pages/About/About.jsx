import React from "react";
import { Link } from "react-router";
import { FaArrowDown } from "react-icons/fa";

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero bg-[#66451C] text-white flex justify-center items-center text-center py-16">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our About Page</h1>
          <p className="text-xl mb-6">Learn more about who we are and what we do. We strive to provide the best services with a personal touch.</p>
          <Link to="#details" className="text-[#e7d5b4] text-lg font-semibold hover:text-[#66451C]">Learn More <FaArrowDown className="inline-block ml-2" /></Link>
        </div>
      </section>

      {/* About Details Section */}
      <section id="details" className="bg-[#f9f7f3] py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl text-[#66451C] font-semibold mb-8">Our Story</h2>
          <p className="text-lg text-[#62661C] leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at lacinia est. Cras venenatis augue ac magna 
            maximus, eu volutpat turpis venenatis. Sed facilisis leo eu odio scelerisque, eu pretium orci cursus. Nam id 
            augue malesuada, luctus felis non, dapibus velit.
          </p>
          <div className="flex justify-center">
            <img src="/path/to/your/image.jpg" alt="Our Team" className="rounded-lg shadow-lg max-w-lg" />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl text-[#66451C] font-semibold mb-8">Our Mission</h2>
          <p className="text-lg text-[#62661C] leading-relaxed mb-6">
            We are committed to delivering the highest quality products and services to meet the unique needs of our 
            customers. Our goal is to make a positive impact on the community and inspire others to join us in our journey.
          </p>
          <h2 className="text-3xl text-[#66451C] font-semibold mb-8">Our Vision</h2>
          <p className="text-lg text-[#62661C] leading-relaxed">
            Our vision is to be the leading provider in our industry by continuing to innovate and provide excellent 
            customer service. We aspire to be a brand that people trust and rely on for years to come.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#e7d5b4]">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl text-[#66451C] font-semibold mb-8">What Our Clients Say</h2>
          <div className="flex justify-between gap-8">
            <div className="testimonial flex-1 text-center">
              <p className="text-lg text-[#62661C] mb-4">
                "This company has completely changed the way we do business. Their services are unmatched!"
              </p>
              <p className="text-sm text-[#66451C]">– John Doe, CEO</p>
            </div>
            <div className="testimonial flex-1 text-center">
              <p className="text-lg text-[#62661C] mb-4">
                "Amazing customer support and a great team to work with. Highly recommend!"
              </p>
              <p className="text-sm text-[#66451C]">– Jane Smith, Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-white py-16 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Ready to Join Us?</h2>
          <p className="text-lg mb-6 text-gray-800">Get in touch with us today and be part of something special!</p>
          <Link to="/contact" className="bg-[#e7d5b4] text-[#66451C] px-8 py-3 rounded font-semibold hover:bg-[#62661C]">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}

export default About;
