import Image, { StaticImageData } from "next/image";
import React from "react";

interface ProjectProps {
  id: number;
  title: string;
  thumbNail?: string | StaticImageData;
  content: string;
  techStack: { icon: React.ReactNode; label: string }[];
  onClick: () => void;
}

export const ProjectContainer = ({
  title,
  thumbNail,
  content,
  techStack,
  onClick,
}: ProjectProps) => {
  return (
    <div className="w-[20rem] flex flex-col h-[60vh] items-start justify-between bg-white p-3 border-2 border-gray-300 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="w-full h-[20vh] bg-gray-200">
        {thumbNail ? (
          <Image
            src={thumbNail}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}
      </div>
      <h2 className="text-l font-bold text-[#333] mb-2 mt-2">{title}</h2>
      <p className="text-sm h-30 text-gray-600 mb-4 line-clamp-3 overflow-auto">
        {content}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, idx) => (
          <span
            key={idx}
            className=" text-gray-800 px-2 py-1 rounded-full text-xs font-medium"
          >
            {tech.icon}
          </span>
        ))}
      </div>
      <button
        onClick={onClick}
        className="text-sm text-[#418399] hover:underline font-semibold mt-auto z-[9999]"
      >
        자세히 보기 →
      </button>
    </div>
  );
};
