import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./review";

const Testimonials: React.FC = () => (
  <Carousel className="bg-black text-white py-10 lg:py-20">
    <CarouselItem index={0}>
      <Review by="Samantha (NY)">
        "I’ve never felt more pampered! The nail art is exquisite and lasts for
        weeks. Every visit feels like a mini retreat."
      </Review>
    </CarouselItem>
    <CarouselItem index={1}>
      <Review by="Liam (LA)">
        "The creativity and attention to detail are off the charts. My nails are
        a work of art, and I can’t wait to come back!"
      </Review>
    </CarouselItem>
    <CarouselItem index={2}>
      <Review by="Ava (Chicago)">
        "From classic elegance to bold designs, they’ve got it all. I always
        leave with a smile and gorgeous nails."
      </Review>
    </CarouselItem>
    <CarouselItem index={3}>
      <Review by="Ethan (Miami)">
        "Professional, friendly, and unbelievably talented. This nail salon
        truly takes self-care to the next level!"
      </Review>
    </CarouselItem>
  </Carousel>
);

export default Testimonials;
