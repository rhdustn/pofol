"use client";

import React from "react";
import Image from "next/image";
import { JsLogo, TsLogo, HtmlLogo } from "../../../../public";

interface SkillItem {
  title: string;
  img: string;
  content: string;
}

interface SkillsContainerProps {
  activeTab: string;
}

const skillsMap: Record<string, SkillItem[]> = {
  Languages: [
    {
      title: "TypeScript",
      img: TsLogo,
      content:
        "제네릭타입을 사용하여 커스텀훅을 만들어 재사용이 가능한 훅으로 만들어 사용했습니다",
    },
    {
      title: "JavaScript",
      img: JsLogo,
      content: "웹 개발의 핵심 언어로, 유연하고 범용적으로 사용됩니다.",
    },

    {
      title: "Html",
      img: HtmlLogo,
      content: "간결한 문법과 다양한 분야에서 활용되는 언어입니다.",
    },
  ],
  Frontend: [
    {
      title: "React",
      img: "/images/react.png",
      content: "컴포넌트 기반의 UI 라이브러리로, 효율적인 렌더링을 지원합니다.",
    },
    {
      title: "Next.js",
      img: "/images/nextjs.png",
      content:
        "서버 사이드 렌더링 및 정적 사이트 생성을 지원하는 프레임워크입니다.",
    },
    {
      title: "Tailwind CSS",
      img: "/images/tailwind.png",
      content: "유틸리티 기반의 CSS 프레임워크로, 빠른 UI 구축이 가능합니다.",
    },
  ],
  Tools: [
    {
      title: "Git & GitHub",
      img: "/images/git.png",
      content: "버전 관리와 협업을 위한 필수 도구입니다.",
    },
    {
      title: "VS Code",
      img: "/images/vscode.png",
      content: "가볍고 확장성 있는 코드 편집기입니다.",
    },
    {
      title: "Figma",
      img: "/images/figma.png",
      content: "디자인 및 UI 협업을 위한 도구입니다.",
    },
  ],
};

export const SkillsContainer = ({ activeTab }: SkillsContainerProps) => {
  const skills = skillsMap[activeTab];

  return (
    <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-6 mt-8">
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
