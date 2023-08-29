import axios from "axios";
import { useState } from "react";

const MemoInput = ({ setMemos }) => {
  const [texts, setTexts] = useState("");
  const handleClick = () => {
    setTexts("");
    if (texts.trim() === "") {
      return;
    }

    axios.post("/memo", { texts }).then((res) => {
      if (res.status === 200) {
        setMemos((memos) => {
          return [res.data, ...memos];
        });
      }
    });
  };
  return (
    <div className="w-full h-1/4 bg-[#5C8374] flex flex-col">
      <textarea
        className="w-full h-full p-2 border-none hover:outline-none focus:outline-none resize-none bg-transparent"
        onChange={(e) => setTexts(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && e.ctrlKey) {
            handleClick();
          }
        }}
        value={texts}
      ></textarea>
      <div className="flex justify-end bg-transparent">
        <button className="bg-[#93B1A6] m-2 p-2" onClick={handleClick}>
          Add
        </button>
      </div>
    </div>
  );
};

export default MemoInput;
