import { useContext } from "react";
import MemoItem from "./MemoItem";
import { MemoContext } from "../Contexts/MemoContext";

const MemoList = () => {
  const { memos, isInputHide } = useContext(MemoContext);
  return (
    <div
      className={`w-full ${
        isInputHide ? "h-full " : "h-2/3 "
      }flex flex-col items-center p-2 bg-red-50 overflow-y-scroll no-scrollbar bg-transparent gap-3`}
    >
      {memos.map((memo, index) => (
        <MemoItem key={index} memo={memo} index={index} />
      ))}
    </div>
  );
};

export default MemoList;
