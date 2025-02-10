import StartGame from "./components/startGame"
import './App.css';
import { useState } from "react";
import GamePlay from "./components/GamePlay";
function App() {

  const [isGameStarted , SetIsGameStarted ] = useState(false)

  const toggleGamePlay = () => {
    SetIsGameStarted((prev) => !prev);
  }

  return (
    <>
    {
      isGameStarted ? <GamePlay />:<StartGame
      toggle = {toggleGamePlay}/>
    }
    </>
  )
}

export default App