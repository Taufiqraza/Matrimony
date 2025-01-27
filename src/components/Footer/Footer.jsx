import { FaReact, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router';
export default () => {
  const footerNavs = [
    {
      label: "Matrimony Services",
      items: [
        { onClick: () => { }, name: "Search Profiles" },
        { onClick: () => { }, name: "Matchmaking" },
        { onClick: () => { }, name: "Premium Plans" },
        { onClick: () => { }, name: "Testimonials" },
      ],
    },
    {
      label: "Company",
      items: [
        { onClick: () => { }, name: "About Us" },
        { onClick: () => { }, name: "Our Mission" },
        { onClick: () => { }, name: "Careers" },
        { onClick: () => { }, name: "Contact Us" },
      ],
    },
    {
      label: "Policies",
      items: [
        { onClick: () => { }, name: "Privacy Policy" },
        { onClick: () => { }, name: "Terms of Service" },
        { onClick: () => { }, name: "Refund Policy" },
        { onClick: () => { }, name: "Cookie Policy" },
      ],
    },
    {
      label: "Connect",
      items: [
        { onClick: () => { }, name: "Blog" },
        { onClick: () => { }, name: "FAQ" },
        { onClick: () => { }, name: "Social Media" },
        { onClick: () => { }, name: "Affiliate Program" },
      ],
    },
  ];

  return (
    <footer className="pt-20 bg-[#66451c]">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        <div className="justify-between items-center gap-12 md:flex">
          <div className="flex-1 max-w-lg">
            <h3 className="text-white text-2xl font-bold">
              Join us today and find your perfect match.
            </h3>
          </div>
          <div className="flex-1 mt-6 md:mt-0">
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-x-3 md:justify-end">
              <div className="relative">
                <svg
                  className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-3 py-2 text-gray-500 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <button className="block w-auto py-3 px-4 font-medium text-sm text-center text-white bg-gray-800 hover:bg-gray-500 active:bg-gray-700 active:shadow-none rounded-lg shadow">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="flex-1 mt-16 space-y-6 justify-between sm:flex md:space-y-0">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-4 text-gray-300" key={idx}>
              <h4 className="text-gray-200 font-semibold sm:pb-2">{item.label}</h4>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      el.onClick();
                    }}
                    className="duration-150 hover:text-gray-400"
                  >
                    {el.name}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="mt-10 py-10 border-t border-gray-700 items-center justify-between sm:flex">
          <p className="text-gray-300">© 2022 Matrimonial Services Inc. All rights reserved.</p>
          <div className="flex items-center gap-x-6 text-gray-400 mt-6">
            {/* Social icons */}
            <div className="flex items-center gap-x-6 text-gray-400 mt-6">

              {/* Facebook */}
              <Link to="/facebook" aria-label="Facebook" className="hover:text-blue-700 duration-150">
                <FaFacebook className="w-6 h-6" />
              </Link>

              {/* Twitter */}
              <Link to="/twitter" aria-label="Twitter" className="hover:text-blue-400 duration-150">
                <FaTwitter className="w-6 h-6" />
              </Link>

              {/* Instagram */}
              <Link to="/instagram" aria-label="Instagram" className="hover:text-pink-500 duration-150">
                <FaInstagram className="w-6 h-6" />
              </Link>

              {/* LinkedIn */}
              <Link to="/linkedin" aria-label="LinkedIn" className="hover:text-blue-600 duration-150">
                <FaLinkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
