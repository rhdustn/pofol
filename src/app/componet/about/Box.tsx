interface BoxProps {
  title: string;
  content: string;
}

export const Box = ({ title, content }: BoxProps) => {
  return (
    <div className="border-4 border-white  bg-white/30 backdrop-blur-md rounded-2xl shadow-xl p-6 text-white w-full max-w-xl h-auto">
      <h2 className="text-xl font-semibold mb-3 text-white drop-shadow">
        {title}
      </h2>
      <p className="text-sm leading-relaxed text-gray-700">{content}</p>
    </div>
  );
};
