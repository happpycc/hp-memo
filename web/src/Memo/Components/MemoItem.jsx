import { useContext } from "react";
import { MemoContext } from "../Contexts/MemoContext";

const MemoItem = ({ memo, index }) => {
  const { delete_memo, setEditing, setEditingIndex, setTexts } =
    useContext(MemoContext);
  const update_time = new Date(memo.update_time).toLocaleString();
  const handle_edit = () => {
    setEditing(true);
    setEditingIndex(index);
    setTexts(memo.texts);
  };
  return (
    <div className="bg-[#3F4E4F] w-full p-2 flex flex-col rounded-lg">
      <div className="flex justify-between">
        <div className="text-[#B9B4C7]">{update_time}</div>
        <div className="flex gap-2 pr-1">
          <button onClick={handle_edit}>Edit</button>
          <button onClick={() => delete_memo(index)}>Delete</button>
        </div>
      </div>
      <div className="whitespace-pre-wrap text-black overflow-x-auto text-lg">
        {memo.texts}
      </div>
    </div>
  );
};
export default MemoItem;
