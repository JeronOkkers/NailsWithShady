import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  socialId: string;
  link: string;
}

const Member: React.FC<Props> = ({ id, name, socialId, link }) => (
  <div className="flex flex-col items-center justify-center space-y-4">
    <div className="flex items-center justify-center w-48 h-48">
      {" "}
      {/* Adjust size as needed */}
      <Image
        src={`/margelo_faces_${id}.svg`}
        alt={name}
        width={200} // Reduced from original
        height={200} // Reduced from original
        className="object-contain w-full h-full"
      />
    </div>
    <div className="text-2xl xl:text-3xl text-center">{name}</div>
    <div className="text-xl text-center">
      <Link legacyBehavior href={link}>
        <a target="_blank" className="hover:text-blue-500 transition-colors">
          {socialId}
        </a>
      </Link>
    </div>
  </div>
);
export default Member;
