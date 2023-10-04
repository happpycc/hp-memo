import Memo from ".//Components/Memo";
import axios from "axios";
import { MemoContextProvider } from ".//Contexts/MemoContext";

const App = () => {
  axios.defaults.baseURL = "https://happpy.cc/api";
  return (
    <MemoContextProvider>
      <Memo />
    </MemoContextProvider>
  );
};

export default App;
