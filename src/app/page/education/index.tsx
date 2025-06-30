import { educationData } from "./constants";
import { EducationSection } from "@/app/componet/education/education";
export const EducationPage = () => {
  return (
    <section className="p-[1.5rem] md:p-[3rem] flex flex-col items-center w-full min-h-screen  bg-[#F7F9FB]">
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-4xl font-paperlogy text-[#2C3E50]  font-semibold  tracking-wide">
          Education
        </h1>
      </div>

      <div className="w-full">
        <EducationSection data={educationData} />
      </div>
    </section>
  );
};
