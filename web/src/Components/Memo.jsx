import MemoInput from "./MemoInput";
import MemoList from "./MemoList";

const Memo = () => {
  return (
    <div className="h-screen flex justify-center items-center font-zpix">
      <div className="flex flex-col h-full w-full bg-[#222831] justify-between">
        <MemoList />
        <MemoInput />
      </div>
    </div>
  );
};

export default Memo;
