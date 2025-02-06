"use client";
import React, { useContext, useCallback, JSX } from "react";
import { EmblaCarouselType } from "embla-carousel-react"; // Import the type
import { CarouselContext } from "./carousel";
import styles from "@/styles/carousel.module.css";

interface Props {
  index: number;
  children: JSX.Element;
}

const CarouselItem: React.FC<Props> = ({ index, children }) => {
  const { embla: emblaApi, selectedIndex } = useContext(CarouselContext);
  const isActive = selectedIndex === index;

  const handleClick = useCallback(() => {
    if (!emblaApi) return;
    (emblaApi as EmblaCarouselType).scrollTo(index); // Correct typing
  }, [emblaApi, index]);

  return (
    <div
      className={`${styles.slide} relative ${isActive ? "active" : ""}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default CarouselItem;
