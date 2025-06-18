import React from "react";

interface ProjectProps {
  title: string;
  content: string;
  techStack: { icon: React.ReactNode; label: string }[];
  onClick: () => void; // 자세히 보기 클릭 시 팝업 열기
}

export const ProjectContainer = ({
  title,
  content,
  techStack,
  onClick,
}: ProjectProps) => {
  return (
    <div className="w-[20rem] flex flex-col h-[50vh] items-start justify-between bg-white p-6 border-2 border-gray-300 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-bold text-[#333] mb-2">{title}</h2>
      <p className="text-sm text-gray-600 mb-4 line-clamp-3">{content}</p>
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
        className="text-sm text-[#418399] hover:underline font-semibold mt-auto"
      >
        자세히 보기 →
      </button>
    </div>
  );
};
