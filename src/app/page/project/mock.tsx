"use client";

import React from "react"; // React import 필수 (JSX 쓰려면)
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

import bounceThumbnail from "../../componet/project/img/next_gif/Nextjs1.gif";
import bounceDetail1 from "../../componet/project/img/next_gif/Nextjs2.gif";
import bounceDetail2 from "../../componet/project/img/next_gif/Nextjs3.gif";
import bounceDetail3 from "../../componet/project/img/next_gif/Nextjs4.gif";
import bounceDetail4 from "../../componet/project/img/next_gif/BlockDetailPc.png";

import TravelThumbnail from "../../componet/project/img/react.png";
import TravelDetail1 from "../../componet/project/img/gif/Travel2.gif";
import TravelDetail2 from "../../componet/project/img/gif/Travel2.gif";
import TravelDetail3 from "../../componet/project/img/gif/Travel3.gif";
import TravelDetail4 from "../../componet/project/img/gif/Travel4.gif";
import TravelDetail5 from "../../componet/project/img/gif/Travel5.gif";
import TravelDetail6 from "../../componet/project/img/gif/Travel6.gif";

import { StaticImageData } from "next/image";

interface TechStackItem {
  icon: React.ReactNode;
  label: string;
}

interface ProjectItem {
  id: number;
  title: string;
  thumbNail: string | StaticImageData;
  content: string;
  detailImage?: (string | StaticImageData)[];
  detailContent?: string[];
  link?: string;
  git?: string;
  techStack: TechStackItem[];
}

export const projectList: ProjectItem[] = [
  {
    id: 1,
    title: "스터디 메이트 1",
    thumbNail: "",
    content:
      "사용자 기반 스터디 그룹 생성 및 참여 기능을 제공하는 웹 플랫폼입니다.",
    techStack: [
      { icon: <SiNextdotjs size={20} />, label: "Next.js" },
      { icon: <SiTypescript size={20} />, label: "TypeScript" },
      { icon: <SiTailwindcss size={20} />, label: "TailwindCSS" },
    ],
  },
  {
    id: 2,
    title: "Bounce explorer(기업 협약 프로젝트)",
    thumbNail: bounceThumbnail,
    detailImage: [bounceDetail1, bounceDetail2, bounceDetail3, bounceDetail4],
    detailContent: [
      "TokenList 페이지, Token Detail 페이지를 구현",
      "Token의 name, transaction 클릭 시 해당 페이지로 이동하도록 경로 설정",
      "Block List 페이지, Block Detail 페이지를 구현",
      "Block의 number 클릭 시 해당 페이지로 이동하도록 경로 설정",
      "반응형 웹 구현 (Tailwind CSS, sm/md/lg breakpoint 지정)",
      "다크모드 커스텀 훅 제작 및 localStorage에 테마 저장",
      "검색 기능 커스텀 훅 제작: 주소/거래해시/숫자 입력값에 따라 경로 반환",
    ],

    link: "https://bouncecode.com",
    git: "",
    content:
      "바운스코드회사와 함께 진행한 협약 프로젝트로써 블록체인 네트워크 내에서 유통되는 토큰, 블록 등에 저장되어 있는 데이터를 확인할 수 있는 사이트를 만들고자 함",
    techStack: [
      { icon: <SiReact size={20} />, label: "React" },
      { icon: <SiNextdotjs size={20} />, label: "Next.js" },
      { icon: <SiTypescript size={20} />, label: "TypeScript" },
      { icon: <SiTailwindcss size={20} />, label: "TailwindCSS" },
    ],
  },
  {
    id: 3,
    title: "스터디 메이트 3",
    thumbNail: TravelThumbnail,
    detailImage: [
      TravelDetail1,
      TravelDetail2,
      TravelDetail3,
      TravelDetail4,
      TravelDetail5,
      TravelDetail6,
    ],

    detailContent: [
      "게시판: 유저가 글 작성/수정/삭제 및 이미지 업로드 가능",
      "좋아요: 게시글과 댓글에 좋아요 가능",
      "댓글 및 대댓글 작성 기능",
      "마이페이지: 프로필 변경 및 내가 좋아요 한 글 보기",
      "팔로우/팔로워 기능",
    ],
    content:
      "트리플 여행앱 아이디어에 AI를 접목하여 개개인의 취향에 맞는 여행 플랜을 제공하는 프로젝트 GOOGLE MAP API를 통해 주변 관광지 추천이 가능한 사이트",
    techStack: [
      { icon: <SiReact size={20} />, label: "React" },
      { icon: <SiNextdotjs size={20} />, label: "Next.js" },
      { icon: <SiTypescript size={20} />, label: "TypeScript" },
      { icon: <SiTailwindcss size={20} />, label: "TailwindCSS" },
    ],
  },
];
