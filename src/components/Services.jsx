import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  { title: "DESIGN", content: ["Branding", "Graphic Design", "Web Design", "UI & UX Design", "Campaign Creative", "Animation", "3D Design"] },
  { title: "STRATEGY", content: ["Market Research", "Brand Positioning", "Content Strategy", "Competitive Analysis"] },
  { title: "MARKETING", content: ["Social Media", "SEO & SEM", "Influencer Marketing", "Email Campaigns"] }
];

function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div className="w-[90%] mx-auto bg-[#DFDFF1] text-[#01193D] border border-[#01193D] my-20 flex md:flex-row justify-between items-center min-h-[500px] p-10">
      <div className="w-1/2">
        <p className="text-2xl font-bold">
          By offering a 360-degree approach, we provide our clients with a one-stop shop for all their marketing needs, ensuring a cohesive and integrated brand experience.
        </p>
      </div>
      <div className="relative w-1/2 flex justify-center items-center">
        <AnimatePresence mode="popLayout">
          {cards.map((card, index) => {
            const isFront = index === activeIndex;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50, rotateY: 90 }}
                animate={{ opacity: isFront ? 1 : 0.5, x: isFront ? 0 : 50, rotateY: isFront ? 0 : 90 }}
                exit={{ opacity: 0, x: -50, rotateY: -90 }}
                transition={{ duration: 0.6 }}
                className={`absolute w-[300px] h-[400px] bg-[#01193D] text-white rounded-2xl shadow-lg ${isFront ? "z-10" : "z-0"}`}
                style={{ transform: `translate(${index * 20}px, ${index * 20}px)`, zIndex: cards.length - index }}
              >
                <h2 className="text-lg font-bold mb-4 pl-6 pt-6">{card.title}</h2>
                <hr/>
                <ul className="text-sm space-y-2 p-6">
                  {card.content.map((item, idx) => (
                    <li key={idx}>&#8226; {item}</li>
                  ))}
                </ul>
                <button
                  onClick={handleNext}
                  className="absolute bottom-4 right-4 bg-[#01193D] text-white px-4 py-2 rounded-lg hover:bg-[#02315E] transition"
                >
                  &gt;&gt;
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Services;
