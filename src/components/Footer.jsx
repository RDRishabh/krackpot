import React from 'react';

function Footer() {
  return (
    <div className="w-[90%] sm:w-[80%] mx-auto mb-10">
      <div className="mt-10 border border-[#01193D] bg-[#DFDFF1] p-4 flex flex-col sm:flex-row justify-between text-[#01193D] text-xs sm:text-sm">
        <div>
          <p className="font-semibold"><strong>ADDRESS:</strong> Goregaon (E), Mumbai - 400063</p>
          <p className="font-semibold"><strong>EMAIL:</strong> krackpotdigital@gmail.com</p>
        </div>
        <div className="text-center sm:text-right font-bold sm:align-middle space-y-2 sm:space-y-0">
          <p>All work &copy; M/s Krackpot Designs and Digital Solutions 2025. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
