import React from "react";
import Image from "next/image";
import SliderContainer, { SliderItem } from "./slider";

const nailImages = Array.from({ length: 17 }, (_, i) => ({
  src: `/nails/nails${i + 1}.jpg`,
  alt: `Nail Art Design ${i + 1}`,
}));

const ClientLogos: React.FC = () => (
  <SliderContainer
    className="flex space-x-4"
    contentWidth={150 * 17}
    initialOffsetX={0}
  >
    {nailImages.map((image, index) => (
      <SliderItem key={index} width={150}>
        <Image
          src={image.src}
          width={150}
          height={150} // Increased height for better visibility
          alt={image.alt}
          priority={index < 2} // Prioritize first two images for faster loading
          style={{ objectFit: "contain", borderRadius: "8px" }} // Modern styling
        />
      </SliderItem>
    ))}
  </SliderContainer>
);

export default ClientLogos;
