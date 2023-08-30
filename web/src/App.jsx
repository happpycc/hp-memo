import Memo from "./Memo/Components/Memo";
import axios from "axios";

const App = () => {
  axios.defaults.baseURL = "http://192.168.1.244:5555/api";
  return (
    <div className="h-screen flex justify-center items-center font-zpix">
      <Memo />
    </div>
  );
};

export default App;
