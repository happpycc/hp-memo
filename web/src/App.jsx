import Memo from "./Memo/Components/Memo";
import axios from "axios";
import { MemoContextProvider } from "./Memo/Contexts/MemoContext";

const App = () => {
  axios.defaults.baseURL = "http://192.168.1.244:5555";
  return (
    <MemoContextProvider>
      <Memo />
    </MemoContextProvider>
  );
};

export default App;
