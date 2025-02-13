import React, { useState } from 'react';

const images = [
  { id: "1", src: "/svg/OttBanners.png", title: "OTT Banners 1" },
  { id: "2", src: "/svg/OttBanners.png", title: "OTT Banners 2" },
  { id: "3", src: "/svg/OttBanners.png", title: "OTT Banners 3" },
];

function Passionate() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="w-[90%] h-[80vh] mx-auto bg-[#DFDFF1] text-[#01193D] border border-[#01193D] my-20 flex flex-col md:flex-row justify-between items-stretch min-h-[500px] shadow-lg">
      
      {/* Left Section */}
      <div className="bg-[#01193D] text-white p-6 sm:p-10 flex flex-col justify-center md:w-1/2">
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug text-center md:text-left">
          We are passionate about delivering exceptional work that exceeds our clients' expectations.
        </p>
        <button className="relative bg-[#DFDFF1] w-fit text-[#01193D] px-6 py-3 mt-4 border-2 shadow-[-5px_5px_0px_#000000] border-[#01193D] font-bold flex items-center gap-2 hover:bg-[#01193D] hover:text-[#DFDFF1] transition-all mx-auto md:mx-0">
          CLICK HERE ▼
        </button>
      </div>
      
      {/* Right Section */}
      <div className="relative md:w-1/2 w-full overflow-hidden h-[50vh] md:h-auto flex justify-center items-center">
        <img src={images[currentImage].src} alt={images[currentImage].title} className="w-full h-full object-cover" loading="lazy"/>
        <div className="absolute bottom-0 left-0 p-4 sm:p-5 text-white text-sm sm:text-lg font-semibold bg-gradient-to-t from-black to-transparent w-full flex justify-between items-center">
          {images[currentImage].title}
          <button onClick={nextImage} className="text-white text-xl sm:text-2xl">➤</button>
        </div>
      </div>
    </div>
  );
}

export default Passionate;
