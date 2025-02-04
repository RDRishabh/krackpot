import React, { useState } from 'react';

const data = [
  {
    "imageUrl": "/svg/aditya.svg",
    "name": "AdityaKumar Nayak",
    "position": "Founder & Creative Head"
  },
  {
    "imageUrl": "/svg/sushmi.svg",
    "name": "Sushmita Nayak",
    "position": "Co - Founder & Business Head"
  },
  {
    "imageUrl": "/svg/krish.svg",
    "name": "Krish Goyal",
    "position": "Developer Head & Founder (French Fries)"
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
        <button onClick={previous} className="p-2 bg-[#01193D] text-white ">Prev</button>
      </div>
      <div className="flex justify-center gap-6 transition-all duration-300">
        {displayedData.map((person, index) => (
          <PersonCard
            key={index}
            imageUrl={person.imageUrl}
            name={person.name}
            position={person.position}
          />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button onClick={next} className="p-2 bg-[#01193D] text-white">Next</button>
      </div>
    </div>
  );
}

function PersonCard({ imageUrl, name, position }) {
  return (
    <div className='w-[250px]'>
        <div className="bg-[#DFDFE8] border-[#01193D] border shadow-lg text-center w-[250px] transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-start">
            <img src={imageUrl} alt={name} className="w-full h-[350px] object-cover" />
        </div>
        <div className="p-2 py-4 flex flex-col items-center justify-start border-[#01193D] border border-t-0">
            <h3 className="font-bold text-xl text-[#01193D] bg-[#DFDFF1] uppercase">{name}</h3>
        </div>
        <div className="p-2 flex flex-col items-center justify-start text-[#01193D] text-wrap">
            <p className="text-md text-center font-medium">{position}</p>
        </div>
    </div>
  );
}

export default Team;
