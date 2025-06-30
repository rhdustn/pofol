interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string[];
  techStack?: string[]; // 선택 사항: 사용 기술
}

interface ExperienceProps {
  data: ExperienceItem[];
}

export const EducationSection = ({ data }: ExperienceProps) => {
  return (
    <section className="p-[1.5rem] md:p-[3rem] flex flex-col justify-center w-full gap-[2rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {data.map(
          ({ id, company, position, period, description, techStack }) => (
            <div
              key={id}
              className="pl-6  relative  border-4 border-[#BFD9E5] rounded-lg p-6 bg-white shadow-md"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-700">
                  {company}
                </h3>
                <span className="text-sm text-gray-400">{period}</span>
              </div>

              <p className="text-base font-medium text-[#6096B4] mb-3">
                {position}
              </p>

              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-3">
                {description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>

              {techStack && techStack.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-[#EAF4F8] text-[#6096B4] px-3 py-1 rounded-full text-sm font-medium border border-[#BFD9E5]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )
        )}
      </div>
    </section>
  );
};
