import React from "react";
import ClientLogos from "./client-logos";
import Testimonials from "./testimonials";
import styles from "../styles/trustedby.module.css";

const TrustedBy: React.FC = () => (
  <section
    className={`bg-white min-h-screen flex flex-col justify-center gap-16 md:gap-32 ${styles.bg}`}
  >
    <div className="flex-1"></div>
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-xl mb-10 font-bold text-center">
        <span className="whitespace-nowrap">Trusted By</span>{" "}
        <span className="whitespace-nowrap">
          Those who loves good nails at affordable prices
        </span>
      </h3>
      <ClientLogos />
    </div>
    <div className="flex flex-col justify-center  items-center">
      <div className="container mx-auto lg:max-w-[70%] lg:px-10">
        <h3 className="text-3xl lg:text-4xl tracking-tight text-center px-10 !leading-[3.4rem]">
          We believe in amazing looking nails at the best possible price and
          nails that will leaving a lasting effect on your and your beaufiful
          day
        </h3>
      </div>
    </div>
    <Testimonials />
    <div className="flex-1 bg-black "></div>
  </section>
);

export default TrustedBy;
