import { useState } from "react";

const MemoItem = ({ memo }) => {
  const update_time = new Date(memo.update_time).toLocaleString();
  const handleClick1 = () => {};
  const handleClick2 = () => {};
  const [btnName1, setBtnName1] = useState("Edit");
  const [btnName2, setBtnName2] = useState("Delete");
  return (
    <div className="bg-[#183D3D] w-full p-1 my-2 flex flex-col">
      <div className="flex justify-between">
        <div>{update_time}</div>
        <div className="flex gap-2 pr-1">
          <button onClick={handleClick1}>{btnName1}</button>
          <button onClick={handleClick2}>{btnName2}</button>
        </div>
      </div>
      <pre className="font-zpix">{memo.texts}</pre>
    </div>
  );
};
export default MemoItem;
