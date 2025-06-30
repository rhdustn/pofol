import { IoMdClose } from "react-icons/io";

interface PopupProps {
  onClose: () => void;
}

export const Popup = ({ onClose }: PopupProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="text-black flex w-full justify-end cursor-pointer mb-2"
        >
          <IoMdClose size={30} />
        </button>

        {/* 제목 */}
        <h2 className="text-xl font-bold mb-4">Project Title</h2>

        {/* 본문 내용 (반응형) */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* 이미지/영상/스크린샷 영역 */}
          <div className="w-full md:w-1/2 h-[250px] md:h-[300px] border border-black" />

          {/* 텍스트 정보 영역 */}
          <div className="w-full md:w-1/2">
            <ul className="text-sm leading-relaxed">
              <li>✅ 프로젝트 소개 내용</li>
              <li>🚀 주요 기능</li>
              <li>💡 사용 기술</li>
              <li>🔗 배포 링크 등</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
