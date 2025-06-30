"use client";

import React from "react";
import Image from "next/image";
import { skillData } from ".";

interface SkillsContainerProps {
  activeTab: string;
}

export const SkillsContainer = ({ activeTab }: SkillsContainerProps) => {
  const skills = skillData[activeTab];

  return (
    <div className="max-w-[700px] w-full bg-white rounded-xl shadow-md p-6 ">
      <h2 className="text-xl font-semibold text-[#418399] mb-6">{activeTab}</h2>
      {skills && (
        <ul className="flex flex-col gap-6 text-gray-700">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-start space-x-4">
              <Image
                src={skill.img}
                alt={skill.title}
                width={48}
                height={48}
                className="object-contain"
              />
              <div>
                <h3 className="text-lg font-bold">{skill.title}</h3>
                <p className="text-sm">{skill.content}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
