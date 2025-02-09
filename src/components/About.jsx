import React from 'react';

function About() {
  return (
    <div className="w-[90%] h-[80vh] mx-auto bg-[#DFDFF1] text-[#01193D] border border-[#01193D] my-20 flex flex-col md:flex-row justify-between items-center min-h-[500px] relative">
      
      {/* Left Section with Image */}
      <div className="relative w-full md:w-1/2 flex justify-center p-8 items-center">
        <div className="rounded-lg overflow-hidden">
          <img src="/svg/Successfulyears.svg" alt="12 Successful Years" className="h-[60vh]" />
        </div>
      </div>

      {/* Vertical Border Divider */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full border-l border-[#01193D]"></div>

      {/* Right Section with Scrollable Text */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center items-center">
        <div className="m-4 relative bg-[#01193D] text-white p-6 mb-8 max-w-[500px] before:absolute before:inset-0 before:-translate-x-2.5 before:translate-y-2.5 before:border-2 before:border-[#01193D] before:content-[''] before:pointer-events-none">
          <p className="text-lg leading-relaxed mb-4">
            We (designers) are crazy, think differently, always think or see things unconventionally. We see designs created in our mind when a client talks about their brief. As crazy as we are, at times we see a 3D imagery in front of our eyes of the end product in motion when a client describes their thought.
          </p>
        </div>
        <div className="mt-6">
          <h4 className="text-5xl font-bold mb-4">Vision</h4>
          <p className="text-lg max-w-[500px]">
            Our vision is to create a visual output of a thought or an idea.
          </p>
        </div>
      </div>

    </div>
  );
}

export default About;
