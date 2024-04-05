import QuizeScreen from "./pages/QuizeScreen";
import StartScreen from "./pages/StartScreen";
import { useSelector } from "react-redux"

function App() {
  const status = useSelector((store) => store.status);

  return (
    <>
      <div className="app">
        {status == "notStarted" && <StartScreen />}
        {status == "start" && <QuizeScreen />}
        {status == "reviewQuize" && <QuizeScreen />}
      </div>
    </>
  );
}

export default App;
