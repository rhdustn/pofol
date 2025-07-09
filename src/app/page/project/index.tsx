"use client";

import { ProjectContainer } from "@/app/componet/project/Container";
import { Popup } from "@/app/componet/project/popup";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { useState } from "react";

// Swiper 관련 import
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export const ProjectsPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupOpen = () => setIsPopupOpen(true);
  const handlePopupClose = () => setIsPopupOpen(false);

  const projectList = [
    {
      title: "스터디 메이트 1",
      content:
        "사용자 기반 스터디 그룹 생성 및 참여 기능을 제공하는 웹 플랫폼입니다.",
      techStack: [
        { icon: <SiNextdotjs size={20} />, label: "Next.js" },
        { icon: <SiTypescript size={20} />, label: "TypeScript" },
        { icon: <SiTailwindcss size={20} />, label: "TailwindCSS" },
      ],
    },
    {
      title: "스터디 메이트 2",
      content:
        "사용자 기반 스터디 그룹 생성 및 참여 기능을 제공하는 웹 플랫폼입니다.",
      techStack: [
        { icon: <SiReact size={20} />, label: "React" },
        { icon: <SiNextdotjs size={20} />, label: "Next.js" },
        { icon: <SiTypescript size={20} />, label: "TypeScript" },
        { icon: <SiTailwindcss size={20} />, label: "TailwindCSS" },
      ],
    },
    {
      title: "스터디 메이트 3",
      content:
        "사용자 기반 스터디 그룹 생성 및 참여 기능을 제공하는 웹 플랫폼입니다.",
      techStack: [
        { icon: <SiReact size={20} />, label: "React" },
        { icon: <SiNextdotjs size={20} />, label: "Next.js" },
        { icon: <SiTypescript size={20} />, label: "TypeScript" },
        { icon: <SiTailwindcss size={20} />, label: "TailwindCSS" },
      ],
    },
  ];

  return (
    <section
      className="p-[1.5rem] md:p-[3rem] flex flex-col justify-center w-full min-h-screen gap-[2rem]
      bg-gradient-to-b from-[#E6EDF3] via-[#F0F4F8] to-[#ffffff] text-gray-800"
    >
      <h1 className="text-3xl text-center font-paperlogy">Projects</h1>

      <div className="max-w-5xl mx-auto w-full">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projectList.map((project, idx) => (
            <SwiperSlide key={idx}>
              <ProjectContainer
                title={project.title}
                content={project.content}
                techStack={project.techStack}
                onClick={handlePopupOpen}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {isPopupOpen && <Popup onClose={handlePopupClose} />}
    </section>
  );
};
