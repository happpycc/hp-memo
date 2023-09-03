import axios from "axios";
import { useFullScreenHandle } from "react-full-screen";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const MemoContext = createContext({});

export function MemoContextProvider({ children }) {
  const [memos, setMemos] = useState([]);
  const [texts, setTexts] = useState("");
  const [isInputHide, setIsInputHide] = useState(false);
  const [editingIndex, setEditingIndex] = useState({});
  const [editing, setEditing] = useState(false);
  const delete_memo = (index) => {
    axios
      .delete(`/memo/${memos[index]._id}`)
      .then((res) => {
        res.status === 200 &&
          setMemos((memos) => {
            return memos.filter((_, _index) => index !== _index);
          });
      })
      .catch((err) => console.log(err));
  };
  const update_memo = () => {
    setTexts("");
    if (texts.trim() === "") {
      return;
    }
    axios
      .put(`/memo/${memos[editingIndex]._id}`, {
        texts,
      })
      .then((res) => {
        res.status === 200 && get_memos();
      });
    setTexts("");
    setEditing(false);
  };
  const get_memos = () => {
    axios
      .get("/memos")
      .then((res) => {
        if (res.status === 200) {
          setMemos(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const add_memo = () => {
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
  useEffect(() => {
    get_memos();
  }, []);

  return (
    <MemoContext.Provider
      value={{
        add_memo,
        memos,
        setMemos,
        texts,
        setTexts,
        isInputHide,
        setIsInputHide,
        delete_memo,
        editing,
        setEditing,
        setEditingIndex,
        update_memo,
      }}
    >
      {children}
    </MemoContext.Provider>
  );
}
