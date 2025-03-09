import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const footerNavs = [
    {
      label: "Matrimony Services",
      items: ["Search Profiles", "Matchmaking", "Premium Plans", "Testimonials"],
    },
    {
      label: "Company",
      items: ["About Us", "Our Mission", "Careers", "Contact Us"],
    },
    {
      label: "Policies",
      items: ["Privacy Policy", "Terms of Service", "Refund Policy", "Cookie Policy"],
    },
    {
      label: "Connect",
      items: ["Blog", "FAQ", "Social Media", "Affiliate Program"],
    },
  ];

  return (
    <footer className="pt-10 bg-[#66451c] text-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left max-w-lg">
            <h3 className="text-2xl font-bold">Join us today and find your perfect match.</h3>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-auto">
            <div className="flex items-center gap-3 justify-center md:justify-end">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full md:w-64 pl-4 pr-3 py-2 text-gray-700 bg-white border border-gray-300 focus:ring-2 focus:ring-indigo-600 rounded-lg"
              />
              <button className="py-2 px-4 font-medium text-white bg-gray-800 hover:bg-gray-600 rounded-lg">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {footerNavs.map((nav, idx) => (
            <div key={idx}>
              <h4 className="text-lg font-semibold pb-2">{nav.label}</h4>
              <ul className="space-y-2">
                {nav.items.map((item, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-gray-300 duration-150">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center pb-10">
          <p className="text-gray-300 text-sm text-center md:text-left">© 2024 Matrimonial Services Inc. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/facebook" aria-label="Facebook" className="hover:text-blue-600">
              <FaFacebook className="w-6 h-6" />
            </Link>
            <Link to="/twitter" aria-label="Twitter" className="hover:text-blue-400">
              <FaTwitter className="w-6 h-6" />
            </Link>
            <Link to="/instagram" aria-label="Instagram" className="hover:text-pink-500">
              <FaInstagram className="w-6 h-6" />
            </Link>
            <Link to="/linkedin" aria-label="LinkedIn" className="hover:text-blue-600">
              <FaLinkedin className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
