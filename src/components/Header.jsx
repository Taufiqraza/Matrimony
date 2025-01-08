import React from "react";
import LoginForm from "./LoginForm";
import SearchIcon from "./SearchIcon";
import PhoneIcon from "./PhoneIcon";
import MailIcon from "./MailIcon";
import FacebookIcon from "./FacebookIcon";
import TwitterIcon from "./TwitterIcon";
import WhatsaapIcon from "./WhatsaapIcon";

function Header() {
  return (
    <header className="flex flex-col">
      <div className="bg-[#66451c] flex flex-row justify-between items-center">
        <div className="flex flex-row px-14 justify-center items-center">
          <SearchIcon />
          <div className="hover:bg-[#e7d5b4]">
            <a href="#" className="px-4 py-2 text-[#e7d5b4] hover:text-[#66451c] text-sm font-semibold">ABOUT</a>
          </div>
          <div className=" hover:bg-[#e7d5b4]">
            <a href="#" className="px-4 py-2 text-[#e7d5b4] hover:text-[#66451c] text-sm font-semibold">FAQ</a>
          </div>
          <div className="hover:bg-[#e7d5b4]">
            <a href="#" className="px-4 py-2 text-[#e7d5b4] hover:text-[#66451c] text-sm font-semibold">CONTACT</a>
          </div>
        </div>
        <div className="flex flex-row px-14">
          <div className="flex flex-row">
            <PhoneIcon />
          </div>
          <div className="flex flex-row">
            <MailIcon/>
          </div>
          <FacebookIcon/>
          <TwitterIcon/>
          <WhatsaapIcon/>
        </div>
      </div>
      <div className="bg-[#f9f7f3] flex flex-row justify-between items-center px-14 py-2">
        <div className="bg-[#66451c] rounded px-2">
          <a href="#"><img src="/src/assets/logo/sangam.svg" alt="logo" width="100px" /></a>
        </div>
        <nav className="flex flex-row justify-evenly items-center gap-x-16">
          <div className="relative text-[#66451c] group">
            <a href="#" className="flex items-center gap-0">Language
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <div className="absolute top-full bg-[#e7d5b4] text-[#66451c] py-6 rounded hidden group-hover:flex flex-col gap-y-4 text-center">
              <a href="#" className="hover:bg-[#f9f7f3] rounded px-4">Hindi</a>
              <a href="#" className="hover:bg-[#f9f7f3] rounded px-4">Marathi</a>
              <a href="#" className="hover:bg-[#f9f7f3] rounded px-4">Telegu</a>
            </div>
          </div>
          <LoginForm />
          <div className="text-[#66451c]"><a href="#">Register</a></div>
          <div className="text-[#66451c]"><a href="#">Help</a></div>
        </nav>
      </div>

    </header>
  );
}
export default Header;