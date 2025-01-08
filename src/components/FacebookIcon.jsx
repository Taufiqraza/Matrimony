import React from "react";

function FacebookIcon() {
  return (
    <div className="hover:bg-[#e7d5b4] px-2 text-[#e7d5b4] hover:text-[#66451c] flex flex-row justify-center items-center">
      <a href="#">
        <svg
          fill="currentColor"
          width="15px"
          height="15px"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z" />
        </svg>
      </a>
    </div>
  );
}

export default FacebookIcon;