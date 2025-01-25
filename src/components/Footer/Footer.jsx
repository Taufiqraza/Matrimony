import React from "react";
import FacebookIcon from "../Icons/FacebookIcon";
import MailIcon from "../Icons/MailIcon";
import PhoneIcon from "../Icons/PhoneIcon";
import WhatsaapIcon from "../Icons/WhatsaapIcon";
import TwitterIcon from "../Icons/TwitterIcon";

function Footer() {
  return (
    <>
      <section className="bg-[#66451c] text-white py-10">
        <div className="flex flex-col justify-center">
          {/* Support Info */}
          <div className="text-center mb-8">
            <h2 className="text-lg md:text-2xl font-semibold">
              <span className="text-gray-900">Free support:</span> +92 (8800) 68 - 8960
              <span className="text-gray-400">&nbsp;|&nbsp;</span>
              <span className="text-gray-900">Email:</span> info@example.com
            </h2>
          </div>
          {/* Footer Links */}
          <div className="flex flex-row justify-around">
            {/* Get In Touch */}
            <div className="flex flex-col px-2">
              <h4 className="text-lg font-semibold mb-4 text-gray-900">Get In Touch</h4>
              <p className="mb-2"><span className="text-gray-900">Address: </span> 3812 Lena Lane City Jackson Mississippi</p>
              <p className="mb-2">
                <span className="text-gray-900">Phone:</span>
                <a href="tel:+917904462944" className="text-white hover:underline">
                  +92 (8800) 68 - 8960
                </a>
              </p>
              <p>
                <span className="text-gray-900">Email:</span>
                <a href="mailto:info@example.com" className="text-white hover:underline">
                  info@example.com
                </a>
              </p>
            </div>
            {/* Help & Support */}
            <div className="px-4">
              <h4 className="text-lg font-semibold mb-4 text-gray-900">Help & Support</h4>
              <ul className="space-y-2">
                <li><a href="about-us.html" className="text-gray-400 hover:text-white">About company</a></li>
                <li><a href="#!" className="text-gray-400 hover:text-white">Contact us</a></li>
                <li><a href="#!" className="text-gray-400 hover:text-white">Feedback</a></li>
                <li><a href="about-us.html#faq" className="text-gray-400 hover:text-white">FAQs</a></li>
                <li><a href="about-us.html#testimonials" className="text-gray-400 hover:text-white">Testimonials</a></li>
              </ul>
            </div>
            {/* Social Media */}
            <div className="px-2">
              <h4 className="text-lg font-semibold mb-4 text-gray-900">Social Media</h4>
              <div className="flex flex-row">
                <FacebookIcon />
                <TwitterIcon />
                <WhatsaapIcon />
              </div>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="mt-8 text-center">
            <p className="text-sm text-white">
              Company name Site - Trusted by over thousands of Boys & Girls for successful marriage.
              <a href="sign-up.html" className="bg-gray-400 text-black px-4 py-2 text-sm rounded hover:bg-white mx-2">
                Join us today!
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer;