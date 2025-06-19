import { ProjectContainer } from "@/app/componet/project/Container";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { Popup } from "@/app/componet/project/popup";
import { useState } from "react";

export const ProjectsPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupOpen = () => setIsPopupOpen(true);
  const handlePopupClose = () => setIsPopupOpen(false);

  return (
    <section
      className="p-[3rem] flex flex-col justify-center w-full min-h-screen gap-[2rem]
  bg-gradient-to-b from-[#E6EDF3] via-[#F0F4F8] to-[#ffffff] text-gray-800"
    >
      <h1 className="text-3xl text-center font-paperlogy ">Projects</h1>
      <div className="max-w-5xl mx-auto">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectContainer
            title="스터디 메이트"
            content="사용자 기반 스터디 그룹 생성 및 참여 기능을 제공하는 웹 플랫폼입니다."
            techStack={[
              { icon: <SiNextdotjs size={20} />, label: "Next.js" },
              { icon: <SiTypescript size={20} />, label: "TypeScript" },
              { icon: <SiTailwindcss size={20} />, label: "TailwindCSS" },
            ]}
            onClick={handlePopupOpen}
          />
          <ProjectContainer
            title="스터디 메이트"
            content="사용자 기반 스터디 그룹 생성 및 참여 기능을 제공하는 웹 플랫폼입니다."
            techStack={[
              { icon: <SiReact size={20} />, label: "React" },
              { icon: <SiNextdotjs size={20} />, label: "Next.js" },
              { icon: <SiTypescript size={20} />, label: "TypeScript" },
              { icon: <SiTailwindcss size={20} />, label: "TailwindCSS" },
            ]}
            onClick={handlePopupOpen}
          />
          <ProjectContainer
            title="스터디 메이트"
            content="사용자 기반 스터디 그룹 생성 및 참여 기능을 제공하는 웹 플랫폼입니다."
            techStack={[
              { icon: <SiReact size={20} />, label: "React" },
              { icon: <SiNextdotjs size={20} />, label: "Next.js" },
              { icon: <SiTypescript size={20} />, label: "TypeScript" },
              { icon: <SiTailwindcss size={20} />, label: "TailwindCSS" },
            ]}
            onClick={handlePopupOpen}
          />
          {isPopupOpen && <Popup onClose={handlePopupClose} />}
        </div>
      </div>
    </section>
  );
};
