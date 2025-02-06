import React from "react";
import Image from "next/image";
import SliderContainer, { SliderItem } from "./slider";

const ClientLogos: React.FC = () => (
  <>
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
      <SliderItem width={150}>
        <Image
          src="/slider/audubon.png"
          width={150}
          height={50}
          alt="audubon"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={200}>
        <Image
          src="/slider/pinkpanda.png"
          width={200}
          height={50}
          alt="candid"
          objectFit="candidontain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/slider/coinbase.png"
          width={150}
          height={50}
          alt="audubon"
          objectFit="contain"
        />
      </SliderItem>{" "}
      <SliderItem width={150}>
        <Image
          src="/slider/push.png"
          width={150}
          height={50}
          alt="audubon"
          objectFit="contain"
        />
      </SliderItem>{" "}
      <SliderItem width={150}>
        <Image
          src="/slider/redbull.png"
          width={150}
          height={50}
          alt="audubon"
          objectFit="contain"
        />
      </SliderItem>{" "}
      <SliderItem width={150}>
        <Image
          src="/slider/picnic.png"
          width={150}
          height={50}
          alt="audubon"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/slider/rainbow.png"
          width={150}
          height={50}
          alt="audubon"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/slider/raive.png"
          width={150}
          height={50}
          alt="audubon"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/slider/coinbase.png"
          width={150}
          height={50}
          alt="audubon"
          objectFit="contain"
        />
      </SliderItem>
    </SliderContainer>
  </>
);

export default ClientLogos;
