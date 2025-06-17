export const EducationPage = () => {
  return (
    <section className="w-full h-[100vh]">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="space-y-6">
        <div className="border p-4 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold">
            Bachelor of Science in Computer Science
          </h3>
          <p className="text-gray-600">University of Technology, 2015 - 2019</p>
          <p className="mt-2">
            Focused on software development, algorithms, and data structures.
            Participated in various coding competitions and hackathons.
          </p>
        </div>
        <div className="border p-4 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold">
            Master of Science in Software Engineering
          </h3>
          <p className="text-gray-600">Tech University, 2020 - 2022</p>
          <p className="mt-2">
            Specialized in web development and cloud computing. Completed a
            thesis on scalable web applications.
          </p>
        </div>
      </div>
    </section>
  );
};
