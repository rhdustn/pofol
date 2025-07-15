import { useState } from "react";
import { VscAccount } from "react-icons/vsc";

export const ToggleButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="w-[60px] h-[60px] rounded-[50%] relative">
      <button
        className="w-full h-full cursor-pointer flex items-center justify-center"
        onClick={toggle}
        aria-label="Toggle profile info"
      >
        <VscAccount size={50} />
      </button>

      {isOpen && (
        <div
          className="absolute bottom-full mb-2 right-0 w-48 p-4 bg-white rounded shadow-lg text-sm text-gray-700"
          style={{ zIndex: 100 }}
        >
          <p>
            <strong>이름:</strong> 고연수
          </p>
          <p>
            <strong>이메일:</strong> yeonsu@example.com
          </p>
          <p>
            <strong>이메일:</strong> yeonsu@example.com
          </p>
        </div>
      )}
    </div>
  );
};
