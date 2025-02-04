import React, { useState } from "react";

const images = [
  { id: 1, src: "/svg/clients/stapl.svg" },
  { id: 2, src: "/svg/clients/fila.svg" },
  { id: 3, src: "/svg/clients/cravatex.svg" },
  { id: 4, src: "/svg/clients/treo.svg" },
  { id: 5, src: "/svg/clients/hdfc_realty.svg" },
  { id: 6, src: "/svg/clients/glutaweis.svg" },
  { id: 7, src: "/svg/clients/nilkamal.svg" },
  { id: 8, src: "/svg/clients/nextwork.svg" },
  { id: 9, src: "/svg/clients/UBLR.svg" },
  { id: 10, src: "/svg/clients/apex.svg" },
  { id: 11, src: "/svg/clients/lkp.svg" },
  { id: 12, src: "/svg/clients/abacus.svg" },
  { id: 13, src: "/svg/clients/stapl.svg" },
  { id: 14, src: "/svg/clients/fila.svg" },
  { id: 15, src: "/svg/clients/cravatex.svg" },
  { id: 16, src: "/svg/clients/treo.svg" },
  { id: 17, src: "/svg/clients/hdfc_realty.svg" },
  { id: 18, src: "/svg/clients/glutaweis.svg" },
  { id: 19, src: "/svg/clients/nilkamal.svg" },
  { id: 20, src: "/svg/clients/nextwork.svg" },
  { id: 21, src: "/svg/clients/UBLR.svg" },
  { id: 22, src: "/svg/clients/apex.svg" },
  { id: 23, src: "/svg/clients/lkp.svg" },
  { id: 24, src: "/svg/clients/abacus.svg" },
];

function Clientele() {
  const [visibleCount, setVisibleCount] = useState(12);

  const handleLoadMore = () => {
    setVisibleCount(images.length);
  };

  return (
    <div className="w-[90%] mx-auto bg-[#DFDFF1] text-[#01193D] border border-[#01193D] my-20">
      {/* Header Section */}
      <div className="flex items-center justify-between border-b border-[#01193D] p-6">
        <h1 className="text-2xl font-bold">We value our clients as partners in our growth.</h1>
        <button className="relative bg-transparent text-[#01193D] px-6 py-3 border-2 shadow-[-5px_5px_0px_#01193D] border-[#01193D] font-bold flex items-center gap-2 after:content-[''] after:absolute after:top-1 after:left-1 after:w-full after:h-full after:border-2 after:border-[#01193D] after:-z-10 hover:bg-[#01193D] hover:text-[#DFDFF1] transition-all">
          CLICK HERE ▼
        </button>
      </div>

      {/* Client Logos Grid */}
      <div className="grid grid-cols-6 py-8">
        {images.slice(0, visibleCount).map((image, index) => (
            <div
                key={image.id}
                className={`flex justify-center items-center border border-[#01193D] p-4 py-12 
                    ${index % 6 === 0 ? 'border-l-0' : ''} 
                    ${index % 6 === 5 ? 'border-r-0' : ''}`}
            >
                <img src={image.src} alt="Client Logo" className="max-w-full h-auto" />
            </div>
        ))}
      </div>


      {/* Load More Button */}
      {visibleCount < images.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="bg-[#01193D] text-[#DFDFF1] px-6 py-3 font-bold"
          >
            LOAD MORE
          </button>
        </div>
      )}
    </div>
  );
}

export default Clientele;
