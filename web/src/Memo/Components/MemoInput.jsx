import { useContext } from "react";
import { MemoContext } from "../Contexts/MemoContext";

const MemoInput = () => {
  const {
    texts,
    setTexts,
    setEditing,
    setIsInputHide,
    isInputHide,
    add_memo,
    editing,
    update_memo,
  } = useContext(MemoContext);
  if (isInputHide) {
    return (
      <div className="bg-transparent m-2">
        <div className="flex justify-start bg-transparent m-2">
          <button
            className="bg-[#93B1A6] px-2 mr-1.5"
            onClick={() => setIsInputHide(false)}
          >
            Show
          </button>
          <button
            className="bg-[#93B1A6] px-2"
            onClick={() => setIsInputHide(false)}
          >
            Full
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="h-1/3 bg-[#5C8374] flex flex-col m-2 rounded-lg">
      <textarea
        className="w-full h-full p-2 border-none hover:outline-none focus:outline-none resize-none bg-transparent text-base"
        onChange={(e) => setTexts(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && e.ctrlKey) add_memo();
        }}
        value={texts}
      ></textarea>
      <div className="flex justify-between bg-transparent m-2">
        <div>
          <button
            className="bg-[#93B1A6] px-2 mr-1.5"
            onClick={() => setIsInputHide(true)}
          >
            Hide
          </button>
          <button
            className="bg-[#93B1A6] px-2"
            onClick={() => setIsInputHide(false)}
          >
            Full
          </button>
        </div>
        <div>
          {editing && (
            <>
              <button
                className="bg-[#93B1A6] px-2 mr-1.5"
                onClick={update_memo}
              >
                Update
              </button>
              <button
                className="bg-[#93B1A6] px-2"
                onClick={() => {
                  setTexts("");
                  setEditing(false);
                }}
              >
                Cancel
              </button>
            </>
          )}
          {!editing && (
            <button className="bg-[#93B1A6] px-2" onClick={add_memo}>
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemoInput;
