import StartGame from "./components/startGame"
import './App.css';
import { useState } from "react";
import GamePlay from "./components/GamePlay";
function App() {

  const [isGameStarted , SetIsGameStarted ] = useState(true)

  const toggleGamePlay = () => {
    SetIsGameStarted((prev) => !prev); // Previous value will be altered
                                       //in state if it is "False" => it will show true 
  }

  return (
    <>
    {
      isGameStarted ? <GamePlay />:<StartGame // if -else
      toggle = {toggleGamePlay}/>
    }
    </>
  )
}

export default App