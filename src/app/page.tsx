import { HomePage } from "./page/home";
import { ProjectsPage } from "./page/project";
import { AboutPage } from "./page/about";
import { EducationPage } from "./page/education";

export default function Home() {
  return (
    <div className=" bg-white">
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <EducationPage />
    </div>
  );
}
