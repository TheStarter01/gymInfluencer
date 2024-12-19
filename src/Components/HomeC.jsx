import React from "react";
import Hero from "./Hero";
import Feature from "./Features";
import HowToUse from "./HowToUse";
import Testimonial from "./Testimonial";
import FAQ from "./FAQ";
import NewsLetter from "./NewsLetter";
import BrandCarousel from "./BrandCarsoule";

const HomeC = () => {
  return (
    <>
      <Hero />
      <BrandCarousel/>
      <Feature />
      <HowToUse />
      <Testimonial />
      <FAQ />
    </>
  );
};

export default HomeC;
