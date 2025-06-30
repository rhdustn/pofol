import { JsLogo, TsLogo, HtmlLogo } from "../../../../public";

interface SkillItem {
  title: string;
  img: string;
  content: string;
}

export const skillData: Record<string, SkillItem[]> = {
  Languages: [
    {
      title: "TypeScript",
      img: TsLogo,
      content:
        "정확한 타입 설계를 통해 오류를 사전에 방지하고, 제네릭과 유틸리티 타입을 활용해 재사용성과 안정성이 높은 코드를 작성했습니다.",
    },
    {
      title: "JavaScript",
      img: JsLogo,
      content:
        "DOM 조작부터 비동기 처리까지 웹 개발 전반에 활용하며, ES6+ 문법을 통해 가독성 높은 코드를 작성하려 노력했습니다.",
    },
    {
      title: "Html",
      img: HtmlLogo,
      content:
        "웹 페이지의 구조를 명확하게 잡고 시맨틱 태그를 활용해 접근성과 유지보수성을 높였습니다.",
    },
    {
      title: "CSS",
      img: "/images/css.png",
      content:
        "Flexbox, Grid, Media Query를 활용해 반응형 UI를 직접 구현해봤으며, 애니메이션과 커스텀 스타일을 통해 사용자 경험을 개선했습니다.",
    },
  ],
  Frontend: [
    {
      title: "React",
      img: "/images/react.png",
      content:
        "다양한 프로젝트를 React로 구현했으며, 상태 관리를 위해 useState, useReducer, Context API를 상황에 맞게 활용하여 작업을 진행했습니다",
    },
    {
      title: "Next.js",
      img: "/images/nextjs.png",
      content:
        "페이지 단위의 라우팅과 SSR/SSG 기능을 프로젝트에 적용해보며 사용자 경험과 SEO 최적화를 동시에 고려한 개발 경험이 있습니다.",
    },
    {
      title: "React Query",
      img: "/images/react-query.png",
      content:
        "서버 상태 관리를 위해 React Query를 도입해 API 요청과 캐싱, 리페칭 등의 비동기 로직을 간결하고 효율적으로 구현했습니다. 로딩/에러 처리와 UX 개선에도 많은 도움이 되었습니다.",
    },
    {
      title: "Tailwind CSS",
      img: "/images/tailwind.png",
      content:
        "다양한 컴포넌트를 빠르게 구성할 수 있어 생산성이 크게 향상되었고, 반응형 디자인과 실무에서 자주 쓰이는 기능을 구현할 때 유용하게 사용했습니다.",
    },
  ],
  Tools: [
    {
      title: "Git & GitHub",
      img: "/images/git.png",
      content:
        "브랜치 전략을 활용한 협업 경험이 있으며, GitHub를 통해 버전 관리와 코드 리뷰를 원활하게 진행했습니다.",
    },

    {
      title: "Figma",
      img: "/images/figma.png",
      content:
        "디자인 시안을 바탕으로 개발에 필요한 UI 요소를 추출하고, 디자이너와의 협업을 원활하게 진행했습니다.",
    },
    {
      title: "ESLint & Prettier",
      img: "/images/eslint.png",
      content:
        "일관된 코드 스타일과 품질 유지를 위해 ESLint 및 Prettier를 설정하고 팀원들과 함께 적용했습니다.",
    },
  ],
};
