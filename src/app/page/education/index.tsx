import { educationData } from "./constants";
import { EducationSection } from "@/app/componet/education/education";
export const EducationPage = () => {
  return (
    <section className="p-[3rem] flex flex-col items-center w-full min-h-screen gap-[3rem] bg-[#F7F9FB]">
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-4xl font-paperlogy text-[#2C3E50]  font-semibold  tracking-wide">
          Education
        </h1>
        <p className="text-gray-500 mt-2 text-base">학력 및 관련 이력</p>
      </div>

      <div className="w-full max-w-3xl">
        <EducationSection data={educationData} />
      </div>
    </section>
  );
};
