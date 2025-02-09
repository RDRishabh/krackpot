import React, { useState } from "react";

const images = [
  { id: 1, src: "/svg/clients/stapl.svg" },
  { id: 2, src: "/svg/clients/fila.svg" },
  { id: 3, src: "/svg/clients/cravatex.svg" },
  { id: 4, src: "/svg/clients/treo.svg" },
  { id: 5, src: "/svg/clients/hdfc_realty.svg" },
  { id: 6, src: "/svg/clients/glutaweis.svg" },
  { id: 7, src: "/svg/clients/nilkamal.svg" },
  { id: 8, src: "/svg/clients/nextwork.svg" },
  { id: 9, src: "/svg/clients/UBLR.svg" },
  { id: 10, src: "/svg/clients/apex.svg" },
  { id: 11, src: "/svg/clients/lkp.svg" },
  { id: 12, src: "/svg/clients/abacus.svg" },
  { id: 1, src: "/svg/clients/stapl.svg" },
  { id: 2, src: "/svg/clients/fila.svg" },
  { id: 3, src: "/svg/clients/cravatex.svg" },
  { id: 4, src: "/svg/clients/treo.svg" },
  { id: 5, src: "/svg/clients/hdfc_realty.svg" },
  { id: 6, src: "/svg/clients/glutaweis.svg" },
  { id: 7, src: "/svg/clients/nilkamal.svg" },
  { id: 8, src: "/svg/clients/nextwork.svg" },
  { id: 9, src: "/svg/clients/UBLR.svg" },
  { id: 10, src: "/svg/clients/apex.svg" },
  { id: 11, src: "/svg/clients/lkp.svg" },
  { id: 12, src: "/svg/clients/abacus.svg" }
];

const associations = [
  { id: 1, src: "/svg/associations/whiteturtlestudios.svg", space: 2 },
  { id: 2, src: "/svg/associations/netflix.svg", space: 1 },
  { id: 3, src: "/svg/associations/prime_video.svg", space: 1 },
  { id: 4, src: "/svg/associations/amazonmini.svg", space: 1 },
  { id: 5, src: "/svg/associations/zeestudios.svg", space: 1 },
  { id: 6, src: "/svg/associations/hansacequity.svg", space: 2 }, 
  { id: 7, src: "/svg/associations/axisbank.svg", space: 1 },
  { id: 8, src: "/svg/associations/ogilyindia.svg", space: 2 },
  { id: 9, src: "/svg/associations/cry.svg", space: 1 },
];

const testimonials = [
  { id: 1, text: "The team at Krackpot was incredibly creative and professional.", author: "Aditya Nayak", position: "Founder", logo: "/svg/associations/netflix.svg" },
  { id: 2, text: "They listened to our needs and delivered beyond expectations.", author: "John Doe", position: "VP Marketing", logo: "/svg/associations/amazonmini.svg" },
  { id: 3, text: "An absolute pleasure to work with. Highly recommended!", author: "Sarah Lee", position: "Technical Head", logo: "/svg/associations/prime_video.svg" },
];

function Clientele() {
  const [activeSection, setActiveSection] = useState("clients");
  const [visibleCount, setVisibleCount] = useState(12);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLoadMore = () => {
    setVisibleCount(images.length);
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-[90%] mx-auto bg-[#DFDFF1] text-[#01193D] border border-[#01193D] my-20">
      {/* Section Title */}
      <div className="text-start border-b border-[#01193D] p-4">
        <h1 className="text-lg md:text-2xl font-bold">
          {activeSection === "clients"
            ? "We value our clients as partners in our growth."
            : activeSection === "testimonials"
            ? "Every interaction is an opportunity to delight."
            : activeSection === "associations" ? "We partner with other agencies to provide their clients the best possible solutions and exceed their expectations." 
            : "We partner with agencies to exceed expectations."}
        </h1>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap gap-2 md:gap-8 justify-center m-6">
        {["clients", "associations", "testimonials"].map((section) => (
          <button
            key={section}
            className={`w-full md:w-56 px-6 py-3 border border-[#01193D] font-bold transition-all ${
              activeSection === section ? "bg-[#01193e] text-[#DFDFF1]" : "hover:bg-[#01193D] hover:text-[#DFDFF1]"
            }`}
            onClick={() => setActiveSection(section)}
          >
            {section === "clients" ? "OUR CLIENTS" : section === "associations" ? "OUR ASSOCIATION WITH" : "WHAT THEY SAY ABOUT US"}
          </button>
        ))}
      </div>

      {/* Clients Section */}
      {activeSection === "clients" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 py-8">
          {images.slice(0, visibleCount).map((image) => (
            <div key={image.id} className="flex justify-center items-center border border-[#01193D] h-32 p-4">
              <img src={image.src} alt="Client Logo" className="max-w-full h-auto" loading="lazy" />
            </div>
          ))}
        </div>
      )}

      {/* Load More Button */}
      {activeSection === "clients" && visibleCount < images.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="bg-[#01193D] text-[#DFDFF1] px-6 py-3 font-bold"
          >
            LOAD MORE
          </button>
        </div>
      )}

      {activeSection === "associations" && (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 py-4 sm:py-8">
          {/* First Item - 2 Columns on large screens, 1 on mobile */}
          <div className="flex justify-center items-center border border-[#01193D] p-4 py-4 sm:py-8 col-span-2 sm:col-span-1 lg:col-span-2">
            <img src="/svg/associations/whiteturtlestudios.svg" alt="White Turtle Studios" className="max-w-full h-24 sm:h-32" loading="lazy" />
          </div>

          {/* Second Item - 1 Column */}
          <div className="flex justify-center items-center border sm:border-l border-[#01193D] p-4 py-4 sm:py-8 col-span-1">
            <img src="/svg/associations/netflix.svg" alt="Netflix" className="max-w-full h-24 sm:h-32" loading="lazy" />
          </div>

          {/* Third Item - 1 Column */}
          <div className="flex justify-center items-center border sm:border-l border-[#01193D] p-4 py-4 sm:py-8 col-span-1">
            <img src="/svg/associations/prime_video.svg" alt="Prime Video" className="max-w-full h-24 sm:h-32" loading="lazy" />
          </div>

          {/* Fourth Item - 1 Column */}
          <div className="flex justify-center items-center border sm:border-l border-[#01193D] p-4 py-4 sm:py-8 col-span-1">
            <img src="/svg/associations/amazonmini.svg" alt="Amazon Mini" className="max-w-full h-24 sm:h-32" loading="lazy" />
          </div>

          {/* Fifth Item - 1 Column */}
          <div className="flex justify-center items-center border sm:border-l border-[#01193D] p-4 py-4 sm:py-8 col-span-1">
            <img src="/svg/associations/zeestudios.svg" alt="Zee Studios" className="max-w-full h-24 sm:h-32" loading="lazy" />
          </div>

          {/* Sixth Item - 2 Columns on large screens, 1 on mobile */}
          <div className="flex justify-center items-center border border-b border-[#01193D] p-4 py-4 sm:py-8 col-span-2 sm:col-span-1 lg:col-span-2">
            <img src="/svg/associations/hansacequity.svg" alt="Hansa Cequity" className="max-w-full h-24 sm:h-32" loading="lazy"/>
          </div>

          {/* Seventh Item - 1 Column */}
          <div className="flex justify-center items-center border sm:border-l border-b border-[#01193D] p-4 py-4 sm:py-8 col-span-1">
            <img src="/svg/associations/axisbank.svg" alt="Axis Bank" className="max-w-full h-24 sm:h-32" loading="lazy" />
          </div>

          {/* Eighth Item - 2 Columns on large screens, 1 on mobile */}
          <div className="flex justify-center items-center border sm:border-l border-b border-[#01193D] p-4 py-4 sm:py-8 col-span-2 sm:col-span-1 lg:col-span-2">
            <img src="/svg/associations/ogilyindia.svg" alt="Ogilvy India" className="max-w-full h-24 sm:h-32" loading="lazy" />
          </div>

          {/* Ninth Item - 1 Column */}
          <div className="flex justify-center items-center border sm:border-l border-b border-[#01193D] p-4 py-4 sm:py-8 col-span-1">
            <img src="/svg/associations/cry.svg" alt="CRY" className="max-w-full h-24 sm:h-32" loading="lazy"/>
          </div>
        </div>
      )}

      {/* Testimonials Section */}
      {activeSection === "testimonials" && (
        <div className="flex flex-col items-center p-6 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl gap-4">
            {/* Previous Button */}
            <button
              onClick={previous}
              className="hidden md:flex p-2 md:p-4 bg-[#01193D] text-white rounded-md"
            >
              <img src="/svg/ArrowLeft.svg" alt="Previous" className="w-6 h-6" />
            </button>

            {/* Testimonial Content */}
            <div className="text-center text-[#01193D] border border-[#01193D] px-8 py-6 md:px-12 md:py-8 w-full max-w-lg">
              <p className="text-base md:text-lg font-medium">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <h3 className="font-bold text-sm md:text-base">{testimonials[currentIndex].author}</h3>
                  <p className="text-xs md:text-sm">{testimonials[currentIndex].position}</p>
                </div>
                <img
                  src={testimonials[currentIndex].logo}
                  alt="Company Logo"
                  className="h-8 md:h-12"
                />
              </div>
            </div>

            <div className="flex gap-4">
              {/* Next Button */}
              <button
                onClick={previous}
                className="flex md:hidden p-2 md:p-4 bg-[#01193D] text-white rounded-md"
              >
                <img src="/svg/ArrowLeft.svg" alt="Previous" className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={next}
                className="p-2 md:p-4 bg-[#01193D] text-white rounded-md"
              >
                <img src="/svg/ArrowRight.svg" alt="Next" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Clientele;
