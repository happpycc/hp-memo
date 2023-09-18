import { useContext } from "react";
import { MemoContext } from "../Contexts/MemoContext";
import screenfull from "screenfull";
import { useState } from "react";

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
  const [screenfullMode, setScreenfullMode] = useState(false);
  screenfull.on("change", () => {
    setScreenfullMode(screenfull.isFullscreen);
  });
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
            onClick={() => {
              screenfull.toggle();
            }}
          >
            {screenfullMode ? "Window" : "Full"}
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="h-1/3 bg-[#5C8374] flex flex-col m-2 rounded-lg">
      <label></label>
      <textarea
        className="w-full h-full p-2 border-none hover:outline-none focus:outline-none resize-none bg-transparent text-base"
        placeholder="What are you thinking about?"
        onChange={(e) => setTexts(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && e.ctrlKey)
            editing ? update_memo() : add_memo();
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
