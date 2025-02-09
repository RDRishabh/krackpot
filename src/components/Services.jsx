import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  {
    title: "DESIGN",
    content: [
      "Branding",
      "Graphic Design",
      "Web Design",
      "UI & UX Design",
      "Campaign Creative",
      "Animation",
      "3D Design",
    ],
  },
  {
    title: "STRATEGY",
    content: [
      "Market Research",
      "Brand Positioning",
      "Content Strategy",
      "Competitive Analysis",
    ],
  },
  {
    title: "MARKETING",
    content: [
      "Social Media",
      "SEO & SEM",
      "Influencer Marketing",
      "Email Campaigns",
    ],
  },
];

function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div className="w-[90%] mx-auto bg-[#DFDFF1] border border-[#01193D] my-20 flex flex-col md:flex-row justify-between items-center center min-h-[600px] md:p-8">
      
      {/* Left Section: Intro Text */}
      <div className="w-full md:w-1/2 text-center md:text-left p-6 md:p-0 mb-8 md:mb-0">
        <p className="text-2xl font-bold text-[#01193D] leading-relaxed">
          By offering a 360-degree approach, we provide our clients with a
          one-stop shop for all their marketing needs, ensuring a cohesive and
          integrated brand experience.
        </p>
      </div>

      {/* Right Section: Animated Card Stack */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center min-h-[500px] p-2">
        <div className="relative w-[360px] h-[480px]">
          <AnimatePresence mode="popLayout">
            {cards.map((card, index) => {
              const position =
                (index - activeIndex + cards.length) % cards.length;
              return (
                <motion.div
                  key={card.title}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{
                    x: position * 20,
                    y: position * -20,
                    opacity: 1,
                    scale: 1 - position * 0.05,
                  }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute w-[280px] h-[420px] md:w-[300px] lg:w-[360px] bg-[#01193D] text-white rounded-3xl shadow-xl border border-gray-400"
                  style={{
                    zIndex: cards.length - position,
                  }}
                >
                  <div className="p-8 h-full flex flex-col">
                    <h2 className="text-2xl font-bold mb-6">{card.title}</h2>
                    <div className="h-px bg-white/20 mb-6" />
                    <ul className="space-y-4 flex-grow">
                      {card.content.map((item, idx) => (
                        <li key={idx} className="flex items-center text-lg">
                          <span className="mr-3">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    {position === 0 && (
                      <button
                        onClick={handleNext}
                        className="absolute bottom-8 right-8 text-2xl font-bold"
                        aria-label="Next Service"
                      >
                        ≫
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Services;
