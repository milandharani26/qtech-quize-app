import { useEffect, useState } from "react";
import QuizeScreen from "./pages/QuizeScreen";
import StartScreen from "./pages/StartScreen";
import { useSelector } from "react-redux"

function App() {
  const { status } = useSelector((store) => store);

  return (
    <>
      <div className="app">
        {status == "notStarted" && <StartScreen />}
        {status == "start" && <QuizeScreen />}

      </div>
    </>
  );
}

export default App;
