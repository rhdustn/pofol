import { FaRegArrowAltCircleDown } from "react-icons/fa";

export const HomePage = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#BDDDE4] to-[#F9F9F9] flex flex-col items-center justify-center px-6 py-10">
      <div className="fade-up flex flex-col md:flex-row items-center text-center gap-10 max-w-5xl">
        <h1 className="font-paperlogy text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 tracking-wide drop-shadow-lg leading-snug">
          프론트엔드 개발자
          <br />
          <span className="text-[#418399] font-extrabold">고연수</span> 입니다.
          <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-md mx-auto md:mx-0">
            <span className="font-semibold text-[#418399]">
              도전을 두려워하지 않고
            </span>
            , <br />
            웹의 무한한 가능성을{" "}
            <span className="italic text-[#6BA4B6]">탐험하는</span> <br />
            <span className="font-semibold">프론트엔드 개발자</span>입니다.
          </p>
        </h1>
        {/* 이미지나 다른 요소 넣으실 자리 */}
      </div>

      <div
        className="mt-10 text-[#BDDDE4] float-animation hover:text-[#418399] cursor-pointer transition-colors duration-300"
        onClick={onClick}
        aria-label="Scroll down"
      >
        <FaRegArrowAltCircleDown size={64} />
      </div>
    </div>
  );
};
