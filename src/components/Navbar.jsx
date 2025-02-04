import React from "react";

function Navbar() {
  return (
    <div className="w-[90%] mx-auto bg-[#DFDFF1] text-[#01193D] flex justify-between items-center border-b border-r border-[#01193D] ">
      <div className="flex items-center gap-x-4">
        <div className="flex flex-col items-center">
          <div className="w-full h-[40px] border-l border-r  border-[#01193D]"></div>
          <div className="border border-[#01193D] bg-[#01193D] p-2">
            <img src="/svg/logo.svg" alt="Krackpot Logo" className="h-[40px]" />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full h-[40px]"></div>
          <div className="flex space-x-4 font-semibold">
            <a href="#hero" className="hover:underline">
              WORK
            </a>
            <span>/</span>
            <a href="#about" className="hover:underline">
              ABOUT
            </a>
            <span>/</span>
            <a href="#services" className="hover:underline">
              SERVICES
            </a>
            <span>/</span>
            <a href="#clients" className="hover:underline">
              CLIENTS
            </a>
            <span>/</span>
            <a href="#contact" className="hover:underline">
              CONTACT
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center ">
        <div className="flex flex-col  items-center">
          <div className="w-full h-[40px]   border-[#01193D]"></div>
          <div className="h-full flex space-x-3  border-[#01193D] p-4">
            <a href="https://linkedin.com" className="hover:opacity-80">
              <img src="/svg/linkedin.svg" alt="" />
            </a>
            <a href="https://facebook.com" className="hover:opacity-80">
              <img src="/svg/facebook.svg" alt="" />
            </a>
            <a href="https://instagram.com" className="hover:opacity-80">
              <img src="/svg/instagram.svg" alt="" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full h-[40px]    border-[#01193D]"></div>
          <div className="h-full">
            <a
              href="#contact"
              className="border-[#01193D] px-4 py-2 hover:bg-[#01193D] hover:text-[#DFDFF1] transition font-extrabold flex items-center justify-center gap-2"
            >
              SAY HI <span className="font-light text-xl leading-none">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
