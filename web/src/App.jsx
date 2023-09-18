import Memo from ".//Components/Memo";
import axios from "axios";
import { MemoContextProvider } from ".//Contexts/MemoContext";

const App = () => {
  axios.defaults.baseURL = "http://192.168.1.11:5555";
  return (
    <MemoContextProvider>
      <Memo />
    </MemoContextProvider>
  );
};

export default App;
