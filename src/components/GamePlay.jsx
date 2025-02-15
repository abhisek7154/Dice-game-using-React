import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { useState } from "react";

const GamePlay = () =>{

    const [score , setScore] = useState(0);
    const [selsctedNumber , setSelectedNumber] = useState();
    const [currentDice , setCurrentDice] = useState(1);
    const [error , setError] = useState("");



    const generateRandomNumber = (min , max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const roleDice = () => {

        if(!selsctedNumber) {

            setError("You have not selected any number")
            return;
        }


        const randomNumber = generateRandomNumber(1,7);
        setCurrentDice((prev) => randomNumber);

        if (setSelectedNumber == randomNumber)
            {
                setScore((prev) => prev + randomNumber);
            } else {
                setScore((prev) => prev -2);
            }


            setSelectedNumber(undefined);
        };
    
    return (
        <MainContainer>
        <div className = "top_section">
            <TotalScore score = {score} />
            <NumberSelector 
            error={error}
            setError={setError}
            selsctedNumber={selsctedNumber}
            setSelectedNumber={setSelectedNumber}
            />
        </div>
        <RollDice 
        currentDice={currentDice}
        roleDice={roleDice}
        />
        <div className="btns">
            <button></button>
            <button></button>
        </div>
        </MainContainer>
    );
};

export default GamePlay;

const MainContainer = styled.main`
padding-top: 70px;
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
`