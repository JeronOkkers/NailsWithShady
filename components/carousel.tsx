"use client";
import ClassNames from "embla-carousel-class-names";
import AutoPlay from "embla-carousel-autoplay";
import type { EmblaCarouselType } from "embla-carousel";

interface ContextValue {
  embla: EmblaCarouselType | undefined; // Now matches emblaApi
  selectedIndex: number;
}

import useEmblaCarousel from "embla-carousel-react";
import React, { ReactNode, useCallback, useEffect, useState } from "react";
import styles from "@/styles/carousel.module.css";

interface ContextValue {
  embla: EmblaCarouselType | undefined; // Use the correct type for the emblaApi
  selectedIndex: number;
}

interface Props {
  className?: string;
  children: ReactNode;
}

export const CarouselContext = React.createContext<ContextValue>({
  embla: undefined,
  selectedIndex: -1,
});

const Carousel: React.FC<Props> = ({ className, children }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [viewportRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [ClassNames(), AutoPlay()],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <CarouselContext.Provider value={{ embla: emblaApi, selectedIndex }}>
      <div
        className={`${styles.viewport} w-full overflow-hidden ${className}`}
        ref={viewportRef}
      >
        <div className={`${styles.container} flex`}>{children}</div>
      </div>
    </CarouselContext.Provider>
  );
};

export default Carousel;
