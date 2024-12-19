import React from "react";
import { BrandCarsoul } from './Constants'

// Sample brand logos (replace these with your actual logo URLs)
const brandLogos = [
  { name: "Brand 1", logo: BrandCarsoul.Brand1 },
  { name: "Brand 2", logo: BrandCarsoul.Brand2 },
  { name: "Brand 3", logo: BrandCarsoul.Brand3 },
  { name: "Brand 4", logo: BrandCarsoul.Brand4 },
  { name: "Brand 5", logo: BrandCarsoul.Brand5 },
  { name: "Brand 4", logo: BrandCarsoul.Brand4 },
  { name: "Brand 1", logo: BrandCarsoul.Brand1 },
  { name: "Brand 2", logo: BrandCarsoul.Brand2 },
  { name: "Brand 3", logo: BrandCarsoul.Brand3 },
  { name: "Brand 4", logo: BrandCarsoul.Brand4 },
  { name: "Brand 5", logo: BrandCarsoul.Brand5 },
 
];

const BrandCarousel = () => {
  return (
    <div className="bg-violet-900 overflow-hidden flex justify-center items-center lg:-mt-20 mt-20 py-8 relative">
      <div
        className="flex space-x-16 absolute animate-scroll"
        style={{
          animation: "scroll 45s linear infinite",
          whiteSpace: "nowrap",
        }}
      >
        {[...brandLogos, ...brandLogos].map((brand, index) => (
          <div key={index} className="flex-shrink-0 flex inline-block px-4">
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-8 object-contain transition w-20"
            />
            
          </div>
        ))}
      </div>

      {/* Inline CSS for custom keyframes */}
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default BrandCarousel;
