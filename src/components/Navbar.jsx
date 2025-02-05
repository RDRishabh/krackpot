import React, { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(true);
    };

    window.addEventListener("scroll", handleScroll, { once: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const offset = document.querySelector(".sticky").offsetHeight;
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-[90%] mx-auto bg-[#DFDFF1] text-[#01193D] flex justify-between items-center border-b border-r border-[#01193D] sticky top-0 z-50 transition-all duration-300">
      <div className="flex items-center gap-x-4">
        <div className="flex flex-col items-center">
          <div className="w-full h-[40px] border-l border-r border-[#01193D]"></div>
          <div className="border border-[#01193D] bg-[#01193D] p-2 transition-all duration-300">
            <img
              src={isScrolled ? "/svg/minimizedlogo.svg" : "/svg/logo.svg"}
              alt="Krackpot Logo"
              className="h-[40px] transition-all duration-300"
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full h-[40px]"></div>
          <div className="flex space-x-4 font-semibold">
            <a href="#hero" className="hover:underline" onClick={(e) => handleNavClick(e, "#hero")}>WORK</a>
            <span>/</span>
            <a href="#about" className="hover:underline" onClick={(e) => handleNavClick(e, "#about")}>ABOUT</a>
            <span>/</span>
            <a href="#services" className="hover:underline" onClick={(e) => handleNavClick(e, "#services")}>SERVICES</a>
            <span>/</span>
            <a href="#clients" className="hover:underline" onClick={(e) => handleNavClick(e, "#clients")}>CLIENTS</a>
            <span>/</span>
            <a href="#contact" className="hover:underline" onClick={(e) => handleNavClick(e, "#contact")}>CONTACT</a>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex flex-col items-center">
          <div className="w-full h-[40px] border-[#01193D]"></div>
          <div className="h-full flex space-x-3 border-[#01193D] p-4 transition-all duration-300">
            <a href="https://linkedin.com" className="hover:opacity-80">
              <img src="/svg/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="https://facebook.com" className="hover:opacity-80">
              <img src="/svg/facebook.svg" alt="Facebook" />
            </a>
            <a href="https://instagram.com" className="hover:opacity-80">
              <img src="/svg/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full h-[40px] border-[#01193D]"></div>
          <div className="h-full">
            <a
              href="#contact"
              className="border-[#01193D] px-4 py-2 hover:bg-[#01193D] hover:text-[#DFDFF1] transition-all duration-300 font-extrabold flex items-center justify-center gap-2"
              onClick={(e) => handleNavClick(e, "#contact")}
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
