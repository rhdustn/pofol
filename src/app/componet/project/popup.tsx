import React from "react";
import { IoMdClose } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

interface TechStackItem {
  icon: React.ReactNode;
  label: string;
}

interface Project {
  title: string;
  thumbNail: string;
  content: string;
  techStack: TechStackItem[];
  detailImage?: string[];
  detailContent?: string[];
  link?: string;
  git?: string;
}

interface PopupProps {
  project: Project;
  onClose: () => void;
}

export const Popup = ({ project, onClose }: PopupProps) => {
  return (
    <div className="fixed top-0 left-0 w-full  h-full z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-5xl animate-fade-in h-[80vh] md:h-[auto] overflow-y-auto">
        {/* 제목 */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2 flex justify-between items-center">
          {project.title}
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition-colors"
            aria-label="Close popup"
          >
            <IoMdClose size={28} />
          </button>
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* 왼쪽: 이미지 슬라이더 */}
          <div className="w-full md:w-1/2">
            {project.detailImage && project.detailImage.length > 0 ? (
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="w-full h-[250px] md:h-[300px] rounded-lg overflow-hidden custom-swiper"
              >
                {project.detailImage.map((src, idx) => (
                  <SwiperSlide key={idx}>
                    <Image
                      src={src}
                      alt={`detail ${idx + 1}`}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="w-full h-[250px] md:h-[300px] border border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm rounded-lg">
                이미지가 없습니다.
              </div>
            )}
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold border-4 rounded-2xl border-blue-200 w-[80px] text-center ">
                  배포링크
                </h3>
                <p className="text-sm text-gray-700">{project.link}</p>
              </div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold border-4 rounded-2xl border-blue-200 w-[80px] text-center ">
                  깃 허브
                </h3>
                <p className="text-sm text-gray-700">{project.git}</p>
              </div>
            </div>
          </div>

          {/* 오른쪽: 내용 */}
          <div className="w-full md:w-1/2 space-y-4">
            {/* 소개 */}
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-1">
                프로젝트 소개
              </h3>
              <p className="text-sm text-gray-700">{project.content}</p>
            </div>

            {/* 구현 기능 */}
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-1">
                구현 기능
              </h3>
              {project.detailContent && project.detailContent.length > 0 ? (
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  {project.detailContent.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-400">
                  구현 기능 정보가 없습니다.
                </p>
              )}
            </div>

            {/* 기술 스택 */}
          </div>
        </div>
      </div>
    </div>
  );
};
