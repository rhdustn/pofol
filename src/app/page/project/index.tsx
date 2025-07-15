"use client";

import { ProjectContainer } from "@/app/componet/project/Container";
import { Popup } from "@/app/componet/project/popup";

import { useState } from "react";
import { projectList } from "./mock";

// Swiper 관련 import
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export const ProjectsPage = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );

  // 팝업 열기 (id만 저장)
  const handlePopupOpen = (id: number) => setSelectedProjectId(id);

  // 팝업 닫기
  const handlePopupClose = () => setSelectedProjectId(null);

  // 선택된 프로젝트 찾기
  const selectedProject =
    projectList.find((p) => p.id === selectedProjectId) ?? null;

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
          navigation
          className="custom-swiper"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projectList.map((project, idx) => (
            <SwiperSlide key={idx}>
              <ProjectContainer
                id={project.id}
                title={project.title}
                thumbNail={project.thumbNail}
                content={project.content}
                techStack={project.techStack}
                onClick={() => handlePopupOpen(project.id)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {selectedProject && (
        <Popup project={selectedProject} onClose={handlePopupClose} />
      )}
    </section>
  );
};
