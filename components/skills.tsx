"use client";
import React, { useContext, useRef } from "react";
import s from "../styles/skills.module.css";
import { ScrollContext } from "@/utils/scroll-observer";

// Added explicit types to parameters and return type
const opacityForBlock = (sectionProgress: number, blockNo: number): number => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

const Skills = () => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  const numOfPages = 3;
  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH,
      ) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <div ref={refContainer} className="bg-black text-white">
      <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
        <div className="leading-[1.15]">
          <div
            className={s.skillText}
            style={{ opacity: opacityForBlock(progress, 0) }}
          >
            <div className="text-center mt-10">
              <h2 className="font-bold text-purple-300">Business Hours</h2>
              <p>Mon to Wed: 8 AM - 4 PM</p>
              <p>Thu to Fri: 8 AM - 2 PM</p>

              <h2 className="font-bold text-purple-300 mt-6">Location</h2>
              <p>22 Duine Str, Scottsville, Kraaifontein</p>
            </div>
          </div>
          <span
            className={`${s.skillText} inline-block after:content-['_']`}
            style={{ opacity: opacityForBlock(progress, 1) }}
          >
            <div className="text-center mt-10">
              <h2 className="font-bold text-purple-300">Price List</h2>
              <p>Gel Overlay + Gel Colour: R100</p>
              <p>Kids Gel Overlay + Gel Colour: R100</p>
            </div>
          </span>
          <span
            className={`${s.skillText} inline-block text-center mt-10`}
            style={{ opacity: opacityForBlock(progress, 2) }}
          >
            <h3 className="font-bold text-purple-300 mt-6">
              Extensions (Priced by Length)
            </h3>
            <p>Long: R130</p>
            <p>Medium: R120</p>
            <p>Short: R110</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
