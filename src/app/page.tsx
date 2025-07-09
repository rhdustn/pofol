"use client";

import { useRef, useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { HomePage } from "./page/home";
import { ProjectsPage } from "./page/project";
import { AboutPage } from "./page/about";
import { EducationPage } from "./page/education";
import { ToggleButton } from "./componet/toggle";

export default function Home() {
  const [unscroll, setUnscroll] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Lenis 인스턴스 생성
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => t * (2 - t), // 기본 ease
    });

    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = unscroll ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [unscroll]);

  const handleScrollDown = () => {
    setUnscroll(true);

    setTimeout(() => {
      if (aboutRef.current && lenisRef.current) {
        lenisRef.current.scrollTo(aboutRef.current, {
          offset: 0, // 필요에 따라 조절
          duration: 1.5, // 초 단위로 스크롤 애니메이션 시간 조절 가능
          easing: (t) => t * (2 - t),
        });
      }
    }, 300);
  };

  return (
    <div className="bg-white relative">
      <div className="fixed bottom-4 right-4">
        <ToggleButton />
      </div>
      <HomePage onClick={handleScrollDown} />
      <div ref={aboutRef}>
        <AboutPage />
        <ProjectsPage />
        <EducationPage />
      </div>
    </div>
  );
}
