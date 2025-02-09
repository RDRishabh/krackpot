import React, { useState } from 'react';

const data = [
  {
    "imageUrl": "/svg/aditya.svg",
    "name": "AdityaKumar Nayak",
    "position": "Founder & Creative Head",
    "portfolioUrl": "https://www.linkedin.com/in/adityakumar-nayak-29136a2b/"
  },
  {
    "imageUrl": "/svg/sushmi.svg",
    "name": "Sushmita Nayak",
    "position": "Co - Founder & Business Head",
    "portfolioUrl": "https://www.linkedin.com/in/sushmita-nayak-357b85331/"
  },
  {
    "imageUrl": "/svg/krish.svg",
    "name": "Krish Goyal",
    "position": "Developer Head & Founder (French Fry Features)",
    "portfolioUrl": "https://www.linkedin.com/in/teslacybot/"
  },
  // Add more entries if needed...
];

function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ensure next wraps around and displays exactly 3 people
  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  // Ensure previous wraps around and displays exactly 3 people
  const previous = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? data.length - 1 : prevIndex - 1
    );
  };

  // Slice the data to always display 3 people
  const displayedData = [
    data[(currentIndex + 0) % data.length],
    data[(currentIndex + 1) % data.length],
    data[(currentIndex + 2) % data.length],
  ];

  return (
    <div className="w-[90%] h-[80vh] mx-auto bg-[#DFDFF1] text-[#01193D] flex justify-between items-center border border-[#01193D] my-20">
      <div className="flex justify-center items-center">
        <button onClick={previous} className="px-4 py-2 bg-[#01193D] text-white rounded-md">
          <img src="/svg/ArrowLeft.svg" alt="" />
        </button>
      </div>
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
      <div className="flex justify-center items-center">
        <button onClick={next} className="px-4 py-2 bg-[#01193D] text-white rounded-md">
          <img src="/svg/ArrowRight.svg" alt="" />
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
            <img src={imageUrl} alt={name} className="w-full h-[350px] object-cover" />
            
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
      <div className="p-2 flex flex-col items-center justify-start text-[#01193D] text-wrap">
        <p className="text-md text-center font-medium">{position}</p>
      </div>
    </div>
  );
}


export default Team;
