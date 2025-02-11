import styled from "styled-components";

const RollDice = ({roleDice , currentDice}) =>{

    return(
        <DiceContainr>
            <div className="Dice" onClick={roleDice}>
                <img src = {`/public/images/dice/dice_${currentDice}.png `} alt = "dice 1" ></img>
            </div>
            <p>
                Click on Dice to roll
            </p>
        </DiceContainr>
    );
};

export default RollDice;

const DiceContainr = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 48px;

.Dice{
    cursor: pointer;
}

p{
    font-size: 24px;
}
`