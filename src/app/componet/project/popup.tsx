interface PopupProps {
  onClose: () => void;
}

export const Popup = ({ onClose }: PopupProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Project Details</h2>
        <p className="mb-4">Here you can view the details of the project.</p>
        <button
          onClick={onClose}
          className="bg-[#90D1CA] text-white px-4 py-2 rounded hover:bg-[#7bb8b0]"
        >
          닫기
        </button>
      </div>
    </div>
  );
};
