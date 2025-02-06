import React from "react";
import Member from "./member";

const AboutUs: React.FC = () => {
  return (
    <section className="flex flex-col bg-white py-20 text-3xl md:text-4xl">
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl tracking-tight">
          <strong>We’ll help you nail the perfect look, effortlessly.</strong>{" "}
          Our expert nail technicians craft stunning, long-lasting designs that
          elevate your style. Whether it’s a classic set or bold, trendy nails,
          we bring beauty and confidence to your fingertips.
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h1 className="font-bold">Our Socials</h1>
        <div className="flex justify-center">
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10 place-items-center">
            <Member
              id="instagram"
              name="instagram"
              socialId="@instagram"
              link="https://www.instagram.com/nailswithshady"
            />
            <Member
              id="tiktok"
              name="Tiktok"
              socialId="@Tiktok"
              link="https://www.tiktok.com/@nailswithshady"
            />
            <Member
              id="linktree"
              name="Linktree"
              socialId="@Linktree"
              link="https://linktr.ee/nailswithshady"
            />
            <Member
              id="whatsapp"
              name="whatsapp"
              socialId="@mrousabyrousaby"
              link="https://github.com/mrousaby"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
