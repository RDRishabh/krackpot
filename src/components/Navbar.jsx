import React, { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-[90%] mx-auto bg-[#DFDFF1] text-[#01193D] flex justify-between items-center border-b border-r border-[#01193D] sticky top-0 z-50 transition-all duration-300">
      <div className="flex items-center w-full gap-4">
        {/* Logo and Hamburger for mobile */}
        <div className="flex items-center gap-x-4">
          <div className="flex flex-col items-center">
            <div className="w-full h-[40px] border-l border-r border-[#01193D]"></div>
            <div className="border border-[#01193D] bg-[#01193D] p-2 transition-all duration-300">
              <img
                src={isScrolled ? "/svg/minimizedlogo.svg" : "/svg/logo.svg"}
                alt="Krackpot Logo"
                className="w-16 md:w-20 lg:w-24 transition-all duration-300" // Fixed size on mobile and responsive scaling
              />
            </div>
          </div>
        </div>

        {/* Hamburger Menu Icon for mobile */}
        <div className="sm:hidden flex items-center" onClick={toggleMenu}>
          <button className="text-[#01193D] text-2xl">
            {isMenuOpen ? "X" : "☰"}
          </button>
        </div>

        {/* Navbar Links */}
        <div className={`sm:flex ${isMenuOpen ? "block" : "hidden"} sm:block flex-col sm:flex-row items-center gap-4 font-semibold`}>
          <div className="w-full h-[40px]"></div>
          <div>
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

      {/* Social Links */}
      <div className="flex items-center gap-4 w-full justify-end">
        <div className="w-full h-[40px]"></div> 
        <div className="flex flex-col items-center sm:flex-row gap-3">
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

        {/* Contact Button */}
        <div className="flex flex-col items-center sm:flex-row gap-3">
          <div className="w-full h-[40px]"></div>
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
  );
}

export default Navbar;
