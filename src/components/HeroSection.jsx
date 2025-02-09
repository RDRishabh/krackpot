import React from 'react';

function HeroSection() {
  return (
    <div className="w-[90%] h-[80vh] mx-auto border-l border-r border-b border-[#01193D] flex justify-center items-center">
      <div className="text-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-[72px] font-bold text-[#01193D] uppercase">Design and Digital</h1>
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-[72px] font-bold text-[#01193D] uppercase">Advertising Agency</h1>
        </div>
        <div>
          <button className="bg-transparent text-[#01193D] px-4 md:px-6 py-2 md:py-3 mt-4 md:mt-6 border-2 border-[#01193D] shadow-[-5px_5px_0px_#01193D] md:shadow-[-10px_10px_0px_#01193D] hover:bg-[#01193D] hover:text-[#DFDFF1] transition-all">
            <a href="" className='font-bold'>VIEW WORK <span className="font-light text-lg md:text-xl leading-none">↗</span> </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;