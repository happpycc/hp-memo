import MemoItem from "./MemoItem";

const MemoList = ({ memos }) => {
  return (
    <div className="w-full h-3/4 flex flex-col items-center px-2 bg-red-50 overflow-y-scroll no-scrollbar bg-transparent">
      {memos.map((memo, index) => (
        <MemoItem key={index} memo={memo} />
      ))}
    </div>
  );
};

export default MemoList;
