import Swiper from "swiper";
import "swiper/css";

export const ProjectsPage = () => {
  return (
    <section className="p-8 bg-white rounded-lg shadow-md w-full h-[100vh] flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4 text-center">Projects</h2>
      <ul className="space-y-4">
        <li className="border p-4 rounded-lg transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold">Project One</h3>
          <p className="text-gray-600">Description of project one.</p>
        </li>
        <li className="border p-4 rounded-lg transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold">Project Two</h3>
          <p className="text-gray-600">Description of project two.</p>
        </li>
        {/* Add more projects as needed */}
      </ul>
    </section>
  );
};
