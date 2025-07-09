"use client";
import { useState } from "react";
import { SkillsContainer } from "@/app/componet/about/skillsContainer";
import { AboutMe } from "@/app/componet/about/aboutMe";
import { ExperienceSection } from "@/app/componet/about/experience";
import { experiencesData } from "./constants";

export const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("Languages");

  const introduce = [
    { id: 1, title: "Languages" },
    { id: 2, title: "Frontend" },
    { id: 3, title: "Tools" },
  ];

  return (
    <section
      className="p-[1.5rem] md:p-[3rem] flex flex-col justify-center w-full min-h-screen gap-[2rem]
    bg-gradient-to-b from-[#BDDDE4] to-[#E6EDF3] text-white"
    >
      {" "}
      <div className="flex flex-col items-start w-full max-w-4xl mx-auto">
        <div className="text-3xl w-full font-bold">About Me</div>
        <div className="flex flex-col md:flex-row gap-10 h-full items-center">
          <AboutMe />
        </div>
      </div>
      <div className="flex flex-col items-start w-full max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">경력 사항</h1>
        <ExperienceSection experiences={experiencesData} />
      </div>
      <div className="flex flex-col items-start w-full max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-1">Skills & Tools</h2>

        {/* 탭 버튼 */}
        <div className="flex flex-col md:flex-row items-start gap-2 md:gap-15 w-full">
          <div className="flex md:flex-col ">
            {introduce.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.title)}
                className={`text-xl text-start font-bold px-1 py-1 transition-colors duration-300 ${
                  activeTab === item.title
                    ? " text-[#418399] border-b-3  border-[#418399] "
                    : "text-white  hover:text-[#418399]"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
          <SkillsContainer activeTab={activeTab} />
        </div>
      </div>
    </section>
  );
};
