import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const data = [
  {
    "imageUrl": "/svg/aditya.png",
    "name": "AdityaKumar Nayak",
    "position": "Founder & Creative Head",
    "portfolioUrl": "https://www.linkedin.com/in/adityakumar-nayak-29136a2b/"
  },
  {
    "imageUrl": "/svg/sushmi.png",
    "name": "Sushmita Nayak",
    "position": "Co - Founder & Business Head",
    "portfolioUrl": "https://www.linkedin.com/in/sushmita-nayak-357b85331/"
  },
  {
    "imageUrl": "/svg/krish.png",
    "name": "Krish Goyal",
    "position": "Developer Head & Founder (French Fry Features)",
    "portfolioUrl": "https://www.linkedin.com/in/teslacybot/"
  },
  {
    "imageUrl": "/svg/tanya.png",
    "name": "Tanya Goyal",
    "position": "Digital Marketing Lead (French Fry Features)",
    "portfolioUrl": "https://www.linkedin.com/in/tanya-goyal-8b8539267/"
  }
  // Add more entries if needed...
];

function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Controls the number of cards visible based on screen size
  const isMobile = window.innerWidth < 768;
  const visibleCards = isMobile ? 1 : 2;

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const previous = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: previous,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const displayedData = Array.from({ length: visibleCards }, (_, i) => 
    data[(currentIndex + i) % data.length]
  );

  return (
    <div {...handlers} className="w-[90%] h-[80vh] mx-auto bg-[#DFDFF1] text-[#01193D] flex flex-col md:flex-row justify-between items-center border border-[#01193D] my-20 p-6 min-h-[500px]">
      
      {/* Left Arrow (Hidden on Mobile) */}
      <button onClick={previous} className="hidden md:flex px-4 py-2 bg-[#01193D] text-white rounded-md">
        <img src="/svg/ArrowLeft.svg" alt="Previous" loading="lazy" />
      </button>

      {/* Carousel Container */}
      <div className="flex justify-center gap-6 transition-all duration-300">
        {displayedData.map((person, index) => (
          <PersonCard
            key={index}
            imageUrl={person.imageUrl}
            name={person.name}
            position={person.position}
            portfolioUrl={person.portfolioUrl}
          />
        ))}
      </div>

      <div className='flex justify-center gap-6'> 
        {/* Left Arrow (Visible on Mobile) */}
        <button onClick={previous} className="flex md:hidden px-4 py-2 bg-[#01193D] text-white rounded-md">
          <img src="/svg/ArrowLeft.svg" alt="Previous" loading="lazy"/>
        </button>

        {/* Right Arrow (Visible on Mobile) */}
        <button onClick={next} className=" md:flex px-4 py-2 bg-[#01193D] text-white rounded-md">
          <img src="/svg/ArrowRight.svg" alt="Next" loading="lazy" />
        </button>
      </div>
    </div>
  );
}

function PersonCard({ imageUrl, name, position, portfolioUrl }) {
  return (
    <div className="w-[250px]">
      <div className="relative group">
        {/* Wrap image with anchor tag */}
        <a href={portfolioUrl} target="_blank" rel="noopener noreferrer" className="block">
          <div className="relative bg-[#DFDFE8] border-[#01193D] border shadow-lg text-center w-[250px] transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-start overflow-hidden">
            
            {/* Image */}
            <img src={imageUrl} alt={name} className="w-full h-[350px] object-cover" loading="lazy"/>
            
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            
            {/* "View Portfolio" text */}
            <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View Portfolio
            </span>
          </div>
        </a>
      </div>

      {/* Name */}
      <div className="p-2 py-4 flex flex-col items-center justify-start border-[#01193D] border border-t-0">
        <h3 className="font-bold text-xl text-[#01193D] bg-[#DFDFF1] uppercase">{name}</h3>
      </div>

      {/* Position */}
      <div className="p-2 flex flex-col items-center justify-center text-[#01193D] text-wrap min-h-[60px] border border-[#01193D] border-t-0 bg-[#DFDFE8]">
        <p className="text-md text-center font-medium">{position}</p>
      </div>

    </div>
  );
}

export default Team;
