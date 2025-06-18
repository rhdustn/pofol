interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string[];
  techStack?: string[]; // 선택 사항: 사용 기술
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export const ExperienceSection = ({ experiences }: ExperienceProps) => {
  return (
    <section className="max-w-4xl mx-auto p-6 w-[30rem] bg-white rounded-lg shadow-md ">
      <div className="flex flex-col space-y-8">
        {experiences.map(
          ({ id, company, position, period, description, techStack }) => (
            <div key={id} className="border-l-4 border-[#418399] pl-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <h3 className="text-xl font-bold text-gray-800">{company}</h3>
                <span className="text-sm text-gray-500">{period}</span>
              </div>
              <p className="text-lg font-semibold text-[#418399] mb-2">
                {position}
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
                {description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
              {techStack && techStack.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-[#418399] text-white px-3 py-1 rounded-full text-sm font-medium"
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
