import { useEffect, useState } from "react";
import MemoInput from "./MemoInput";
import MemoList from "./MemoList";
import axios from "axios";

const Memo = () => {
  const [memos, setMemos] = useState([]);
  useEffect(() => {
    axios.get("/memos").then((res) => {
      if (res.status === 200) {
        setMemos(res.data);
      }
    });
  }, []);
  return (
    <div className="flex flex-col h-full w-full bg-[#040D12]">
      <MemoList memos={memos} />
      <MemoInput setMemos={setMemos} />
    </div>
  );
};

export default Memo;
