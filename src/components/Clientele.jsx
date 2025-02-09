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
  { id: 13, src: "/svg/clients/stapl.svg" },
  { id: 14, src: "/svg/clients/fila.svg" },
  { id: 15, src: "/svg/clients/cravatex.svg" },
  { id: 16, src: "/svg/clients/treo.svg" },
  { id: 17, src: "/svg/clients/hdfc_realty.svg" },
  { id: 18, src: "/svg/clients/glutaweis.svg" },
  { id: 19, src: "/svg/clients/nilkamal.svg" },
  { id: 20, src: "/svg/clients/nextwork.svg" },
  { id: 21, src: "/svg/clients/UBLR.svg" },
  { id: 22, src: "/svg/clients/apex.svg" },
  { id: 23, src: "/svg/clients/lkp.svg" },
  { id: 24, src: "/svg/clients/abacus.svg" },
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
  { id: 1, text: "The team at M/s Krackpot Design and Digital Solutions was incredibly creative and professional. They listened to our needs and delivered a campaign that exceeded our expectations.", author: "Aditya Nayak", position: "Founder", logo: "/svg/associations/netflix.svg" },
  { id: 2, text: "The team at M/s Krackpot Design and Digital Solutions was incredibly creative and professional. They listened to our needs and delivered a campaign that exceeded our expectations.", author: "Aditya Nayak", position: "VP Marketing", logo: "/svg/associations/amazonmini.svg" },
  { id: 3, text: "The team at M/s Krackpot Design and Digital Solutions was incredibly creative and professional. They listened to our needs and delivered a campaign that exceeded our expectations.", author: "Aditya Nayak", position: "Technical Head", logo: "/svg/associations/prime_video.svg" },
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
    <div className="w-[90%] h-[80vh] mx-auto bg-[#DFDFF1] text-[#01193D] border border-[#01193D] my-20">
      <div className="flex items-center justify-between border-b border-[#01193D] p-6">
        {
          activeSection === "clients" ? (
            <h1 className="text-2xl font-bold">We value our clients as partners in our growth.</h1>
          ) : activeSection === "associations" ? (
            <h1 className="text-2xl font-bold">We partner with other agencies to provide their clients the best possible solutions and exceed their expectations.</h1>
          ) : activeSection === "testimonials" ? (
            <h1 className="text-2xl font-bold">Every interaction is an opportunity to delight.</h1>
          ) : null
        }
      </div>

      <div className="flex space-x-8 justify-center">
        <button 
          className={`relative w-56 px-6 py-3 border border-t-0 border-[#01193D] font-bold transition-all ${activeSection === "clients" ? "bg-[#01193e] !important text-[#DFDFF1]" : "hover:bg-[#01193D] hover:text-[#DFDFF1]"}`} 
          onClick={() => setActiveSection("clients")}>
          OUR CLIENTS
        </button>
        <button 
          className={`relative w-56 px-6 py-3 border border-t-0 border-[#01193D] font-bold transition-all ${activeSection === "associations" ? "bg-[#01193e] text-[#DFDFF1]" : "hover:bg-[#01193D] hover:text-[#DFDFF1]"}`} 
          onClick={() => setActiveSection("associations")}>
          OUR ASSOCIATION WITH
        </button>
        <button 
          className={`relative w-56 px-6 py-3 border border-t-0 border-[#01193D] font-bold transition-all ${activeSection === "testimonials" ? "bg-[#01193e] text-[#DFDFF1]" : "hover:bg-[#01193D] hover:text-[#DFDFF1]"}`} 
          onClick={() => setActiveSection("testimonials")}>
          WHAT THEY SAY ABOUT US
        </button>
      </div>
      
      {activeSection === "clients" && (
        <div>
          <div className="grid grid-cols-6 py-8">
            {images.slice(0, visibleCount).map((image, index) => (
                <div
                    key={image.id}
                    className={`flex justify-center items-center border border-[#01193D] p-4 py-4
                        ${index % 6 === 0 ? 'border-l-0' : ''} 
                        ${index % 6 === 5 ? 'border-r-0' : ''}`}
                >
                    <img src={image.src} alt="Client Logo" className="max-w-full h-auto" />
                </div>
            ))}
          </div>
          {/* Load More Button */}
          {visibleCount < images.length && (
            <div className="flex justify-center mt-6">
              <button
                onClick={handleLoadMore}
                className="bg-[#01193D] text-[#DFDFF1] px-6 py-3 font-bold"                               
              >
                LOAD MORE
              </button>
            </div>
          )}
        </div>
      )}

      {activeSection === "associations" && (
        <div className="grid grid-cols-6 py-8">
          {/* First Item - 2 Columns */}
          <div className="flex justify-center items-center border-t border-[#01193D] p-4 py-8 col-span-2">
            <img src="/svg/associations/whiteturtlestudios.svg" alt="White Turtle Studios" className="max-w-full h-auto" />
          </div>

          {/* Second Item - 1 Column */}
          <div className="flex justify-center items-center border-t border-l border-[#01193D] p-4 py-8 col-span-1">
            <img src="/svg/associations/netflix.svg" alt="Netflix" className="max-w-full h-auto" />
          </div>

          {/* Third Item - 1 Column */}
          <div className="flex justify-center items-center border-t border-l border-[#01193D] p-4 py-8 col-span-1">
            <img src="/svg/associations/prime_video.svg" alt="Prime Video" className="max-w-full h-auto" />
          </div>

          {/* Fourth Item - 1 Column */}
          <div className="flex justify-center items-center border-t border-l border-[#01193D] p-4 py-8 col-span-1">
            <img src="/svg/associations/amazonmini.svg" alt="Amazon Mini" className="max-w-full h-auto" />
          </div>

          {/* Fifth Item - 1 Column */}
          <div className="flex justify-center items-center border-t border-l border-[#01193D] p-4 py-8 col-span-1">
            <img src="/svg/associations/zeestudios.svg" alt="Zee Studios" className="max-w-full h-auto" />
          </div>

          {/* Sixth Item - 2 Columns */}
          <div className="flex justify-center items-center border-t border-b border-[#01193D] p-4 py-8 col-span-2">
            <img src="/svg/associations/hansacequity.svg" alt="Hansa Cequity" className="max-w-full h-auto" />
          </div>

          {/* Seventh Item - 1 Column */}
          <div className="flex justify-center items-center border-t border-l border-b border-[#01193D] p-4 py-8 col-span-1">
            <img src="/svg/associations/axisbank.svg" alt="Axis Bank" className="max-w-full h-auto" />
          </div>

          {/* Eighth Item - 2 Columns */}
          <div className="flex justify-center items-center border-t border-l border-b border-[#01193D] p-4 py-8 col-span-2">
            <img src="/svg/associations/ogilyindia.svg" alt="Ogilvy India" className="max-w-full h-auto" />
          </div>

          {/* Ninth Item - 1 Column */}
          <div className="flex justify-center items-center border-t border-l border-b border-[#01193D] p-4 py-8 col-span-1">
            <img src="/svg/associations/cry.svg" alt="CRY" className="max-w-full h-auto" />
          </div>
        </div>
      )}







      {activeSection === "testimonials" && (
        <div className="flex flex-col items-center bg-[#DFDFF1] p-8 my-16 w-full">
          <div className="flex items-center justify-between w-full">
            {/* Previous Button */}
            <button onClick={previous} className="px-4 py-2 bg-[#01193D] text-white rounded-md">
              <img src="/svg/ArrowLeft.svg" alt="" />
            </button>

            {/* Testimonial Content */}
            <div className="flex flex-col items-center text-[#01193D] border border-[#01193D] px-12 py-8 w-full max-w-lg text-center">
              <p className="text-lg font-medium">"{testimonials[currentIndex].text}"</p>
              <div className="flex justify-between items-center w-full mt-4">
                <div>
                  <h3 className="font-bold">{testimonials[currentIndex].author}</h3>
                  <p className="text-sm">{testimonials[currentIndex].position}</p>
                </div>
                <img src={testimonials[currentIndex].logo} alt="Company Logo" className="h-12 mb-4" />
              </div>
            </div>

            {/* Next Button */}
            <button onClick={next} className="px-4 py-2 bg-[#01193D] text-white rounded-md">
              <img src="/svg/ArrowRight.svg" alt=""/>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Clientele;
 