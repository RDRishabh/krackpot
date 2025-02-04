import React from 'react';

function About() {
  return (
    <div className="w-[90%] mx-auto bg-[#DFDFF1] text-[#01193D] border border-[#01193D] my-20 flex flex-col md:flex-row justify-between items-stretch min-h-[500px]">
      {/* Left Section with Images */}
      <div className="overflow-hidden px-6 pb-6">
        <img src="/svg/Aboutimage.svg" alt="Office workspace" className="w-auto h-auto" />
      </div>

      {/* Right Section with Scrollable Text */}
      <div className="w-full max-w-xl md:w-1/2 bg-[#01193D] text-white p-6 overflow-hidden flex-1 flex">
        <div className="pr-4">
          <p className="mb-4 text-2xl">
            We (designers) are crazy, think differently, always think or see things unconventionally. We see designs created in our mind when a client talks about their brief. As crazy as we are, at times we see a 3D imagery in front of our eyes of the end product in motion when a client describes their thought.
          </p>
          <div>
            <h4 className="text-4xl font-bold mb-2">Vision</h4>
            <p className="text-2xl">
                Our vision is similar to a Chef, who takes raw food and creates a very well-curated dish that is palatable and presentable.
                We want to take the raw ideas and words from a person and convert them into a creative, innovative, functional design.
                Our vision is to create a visual output of a thought or an idea.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
