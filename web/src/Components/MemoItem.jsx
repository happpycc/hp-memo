import { useContext } from "react";
import { MemoContext } from "../Contexts/MemoContext";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

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
        <div className="text-black text-sm">{update_time}</div>
        <div className="flex gap-2 pr-1">
          <button onClick={handle_edit}>
            <PencilSquareIcon className="h-4 w-4" />
          </button>
          <button onClick={() => delete_memo(index)}>
            <TrashIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="whitespace-pre-wrap overflow-x-auto text-base text-[#B9B4C7]">
        {memo.texts}
      </div>
    </div>
  );
};
export default MemoItem;
