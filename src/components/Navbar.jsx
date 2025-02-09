import React, { useState, useEffect, useRef } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Track the active section
  const menuRef = useRef(null); // For detecting clicks outside the menu
  const overlayRef = useRef(null); // To control the overlay visibility

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(true);
      const sections = ["hero", "about", "services", "clients", "contact"];
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section && window.scrollY >= section.offsetTop -400) {
          setActiveSection(sections[i]);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close menu when clicking outside
      }
    };

    if (isMenuOpen) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

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
    setIsMenuOpen(!isMenuOpen );
  };

  return (
    <div className="w-[90%] mx-auto bg-[#DFDFF1] text-[#01193D] flex justify-between items-center border-b border-r border-[#01193D] sticky top-0 z-50 transition-all duration-300 gap-2">
      <div className={`flex items-center w-full lg:w-fit justify-between gap-4`}>
        {/* Logo */}
        <div className="flex items-center gap-x-4">
          <div className="flex flex-col items-center">
            <div className="hidden lg:flex w-full h-[40px] border-l border-r border-[#01193D]"></div>
            <div className="border border-[#01193D] bg-[#01193D] p-2 transition-all duration-300">
              <img
                src={isScrolled ? "/svg/minimizedlogo.svg" : "/svg/logo.svg"}
                alt="Krackpot Logo"
                className="h-12 transition-all duration-300"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Hamburger Menu Icon for mobile */}
        <div className="lg:hidden items-center justify-end p-2" onClick={toggleMenu}>
          <div className="hidden lg:flex w-full h-[40px]"></div>
          <button className="text-[#01193D] text-2xl">
            {isMenuOpen ? "" : "☰"}
          </button>
        </div>
      </div>

      {/* Sidebar for mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#DFDFF1] border-r border-[#01193D] transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-40`}
      >
        {/* Close Button inside Sidebar */}
        <div className="flex justify-end p-4">
          <button className="text-[#01193D] text-2xl" onClick={toggleMenu}>X</button>
        </div>

        <div className="flex flex-col items-center mt-10 justify-around h-full">
          {/* Navbar Links */}
          <div className="flex flex-col items-center gap-4">
            {["hero", "about", "services", "clients", "contact"].map((section) => (
              <a
                href={`#${section}`}
                className={`${activeSection === section ? "font-bold" : ""} hover:underline`}
                onClick={(e) => handleNavClick(e, `#${section}`)}
                key={section}
              >
                { section === "hero" ? "WORK" : section === "about" ? "ABOUT" : section === "services" ? "SERVICES" : section === "clients" ? "CLIENTS" : "CONTACT" }
                
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 justify-end p-2">
            {/* Social Links */}
            <div className="flex items-center sm:flex-row gap-3 mt-6">
              <a href="https://linkedin.com" className="hover:opacity-80">
                <img src="/svg/linkedin.svg" alt="LinkedIn" loading="lazy"/>
              </a>
              <a href="https://facebook.com" className="hover:opacity-80">
                <img src="/svg/facebook.svg" alt="Facebook" loading="lazy"/>
              </a>
              <a href="https://instagram.com" className="hover:opacity-80">
                <img src="/svg/instagram.svg" alt="Instagram" loading="lazy"/>
              </a>
            </div>

            <div>
              {/* Contact Button */}
              <a
                href="#contact"
                className="border-[#01193D] px-4 py-2 hover:bg-[#01193D] hover:text-[#DFDFF1] transition-all duration-300 font-extrabold flex items-center justify-center gap-2 mt-6"
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                SAY HI <span className="font-light text-xl leading-none">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>


      {/* Overlay for Background */}
      {isMenuOpen && (
        <div
          ref={overlayRef}
          className="fixed top-0 left-0 w-full h-full bg-black opacity-20 z-30"
          onClick={toggleMenu} // Close menu when clicking on the overlay
        />
      )}

      {/* Desktop Layout - Navbar Links, Social Media and Say Hi */}
      <div className="hidden lg:flex items-center gap-4 w-full justify-between">
        <div>
          <div className="hidden lg:flex w-full h-[40px]"></div>
          <div className="flex items-center gap-4">
            <a href="#hero" className={`${activeSection === "hero" ? "font-bold" : ""} hover:underline`} onClick={(e) => handleNavClick(e, "#hero")}>WORK</a>
            <span>/</span>
            <a href="#about" className={`${activeSection === "about" ? "font-bold" : ""} hover:underline`} onClick={(e) => handleNavClick(e, "#about")}>ABOUT</a>
            <span>/</span>
            <a href="#services" className={`${activeSection === "services" ? "font-bold" : ""} hover:underline`} onClick={(e) => handleNavClick(e, "#services")}>SERVICES</a>
            <span>/</span>
            <a href="#clients" className={`${activeSection === "clients" ? "font-bold" : ""} hover:underline`} onClick={(e) => handleNavClick(e, "#clients")}>CLIENTS</a>
            <span>/</span>
            <a href="#contact" className={`${activeSection === "contact" ? "font-bold" : ""} hover:underline`} onClick={(e) => handleNavClick(e, "#contact")}>CONTACT</a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 w-full justify-end">
          <div>
            <div className="w-full h-[40px]"></div>  
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com" className="hover:opacity-80">
                <img src="/svg/linkedin.svg" alt="LinkedIn" loading="lazy"/>
              </a>
              <a href="https://facebook.com" className="hover:opacity-80">
                <img src="/svg/facebook.svg" alt="Facebook" loading="lazy"/>
              </a>
              <a href="https://instagram.com" className="hover:opacity-80">
                <img src="/svg/instagram.svg" alt="Instagram" loading="lazy"/>
              </a>
            </div>
          </div>

          {/* Contact Button */}
          <div>
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
    </div>
  );
}

export default Navbar;
 