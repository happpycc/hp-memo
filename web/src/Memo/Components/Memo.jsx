import MemoInput from "./MemoInput";
import MemoList from "./MemoList";
import { MemoContextProvider } from "../Contexts/MemoContext";

const Memo = () => {
  return (
    <MemoContextProvider>
      <div className="flex flex-col h-full w-full bg-[#222831] justify-between">
        <MemoList />
        <MemoInput />
      </div>
    </MemoContextProvider>
  );
};

export default Memo;
