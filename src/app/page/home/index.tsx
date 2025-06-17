export const HomePage = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#BDDDE4] to-[#F9F9F9] flex flex-col items-center justify-center px-6 py-10">
      <div className="fade-up flex flex-col md:flex-row items-center text-center gap-10">
        <h1 className="font-paperlogy text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 tracking-wide drop-shadow-lg leading-snug">
          프론트엔드 개발자
          <br />
          <span className="text-[#418399] font-bold">고연수</span> 입니다.
        </h1>

        <div className="fade-up mt-10 w-[70vw] h-[70vw] sm:w-[40vw] sm:h-[40vw] md:w-[20vw] md:h-[20vw] bg-white flex items-center justify-center rounded-xl shadow-lg transition-transform transform hover:scale-105">
          {/* 여기에 이미지나 아이콘 추가 */}
        </div>
      </div>

      {/* 추가적인 버튼 */}
      <div className="mt-10">
        <a
          href="#projects"
          className="bg-[#418399] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#356f7a] transition duration-300"
        >
          내 프로젝트 보기
        </a>
      </div>
    </div>
  );
};
