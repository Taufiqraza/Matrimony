import React from "react";
import { Link } from "react-router";
import { FaFacebookF } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <section className="bg-gray-100 text-[#66451c] py-12">
        <div className="container mx-auto px-6">
          {/* Support Info */}
          <div className="text-center mb-12">
            <h2 className="text-lg md:text-2xl font-semibold">
              <span className="text-gray-900">Free support:</span> +92 (8800) 68 - 8960
              <span className="text-gray-400 mx-2">|</span>
              <span className="text-gray-900">Email:</span> info@example.com
            </h2>
          </div>

          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center px-10">
            {/* Get In Touch */}
            <div className="ml-4">
              <h4 className="text-xl font-bold mb-4 text-gray-900">Get In Touch</h4>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <span className="font-semibold">Address:</span>
                  3812 Lena Lane, Jackson, Mississippi
                </li>
                <li>
                  <span className="font-semibold">Phone:</span>
                  <Link href="tel:+917904462944" className="text-[#66451c] hover:underline">
                    +92 (8800) 68 - 8960
                  </Link>
                </li>
                <li>
                  <span className="font-semibold">Email:</span>
                  <Link href="mailto:info@example.com" className="text-[#66451c] hover:underline">
                    info@example.com
                  </Link>
                </li>
              </ul>
            </div>

            {/* Help & Support */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-gray-900">Help & Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="about-us.html" className="text-gray-700 hover:text-[#66451c]">
                    About Company
                  </Link>
                </li>
                <li>
                  <Link href="#!" className="text-gray-700 hover:text-[#66451c]">Contact Us</Link>
                </li>
                <li>
                  <Link href="#!" className="text-gray-700 hover:text-[#66451c]">Feedback</Link>
                </li>
                <li>
                  <Link href="about-us.html#faq" className="text-gray-700 hover:text-[#66451c]">FAQs</Link>
                </li>
                <li>
                  <Link href="about-us.html#testimonials" className="text-gray-700 hover:text-[#66451c]">Testimonials</Link>
                </li>
              </ul>
            </div>

            {/* Join Us */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-gray-900">Join Us</h4>
              <p className="text-gray-700 mb-4">
                Trusted by thousands for successful marriages. Join our growing community today!
              </p>
              <Link
                href="sign-up.html"
                className="inline-block bg-[#66451c] text-white px-6 py-2 rounded hover:bg-gray-900 transition-all"
              >
                Sign Up Now
              </Link>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-gray-900 text-center">Follow Us</h4>
              <div className="flex space-x-4 mx-auto">
                <Link href="#" className="hover:opacity-80">
                  <FaFacebookF />
                </Link>
                <Link href="#" className="hover:opacity-80">
                  <FaWhatsapp />
                </Link>
                <Link href="#" className="hover:opacity-80">
                  <FaTwitter />
                </Link>
                <Link href="#" className="hover:opacity-80">
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-12 border-t border-gray-300 pt-6 text-center">
            <p className="text-sm text-gray-600">
              © 2025 Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </section>



    </>
  )
}

export default Footer;