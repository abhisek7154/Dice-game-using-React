import styled from "styled-components";

const NumberSelector = ({setError ,error , selsctedNumber , setSelectedNumber}) => {

    const arrNumbr = [1 , 2 , 3 , 4 , 5 , 6];

    const numberSelectorHandler = (value) => {
        setSelectedNumber(value)
        setError("")
    };

    return(
    <NumberSelectorContainer>
        <p className="ErrorColor"
        >{error}</p>
        <div className = "flex">
        {
        arrNumbr.map((value , i) => (
        <Box 
        isSelected = {value == selsctedNumber}
        Key = {i} onClick={() => numberSelectorHandler(value)}>
        {value}
        </Box>
        ))
        }
        </div>
        <p>Select Number</p>
    </NumberSelectorContainer>
    );
};

export default NumberSelector;


const NumberSelectorContainer =  styled.div`

    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{
       display : flex ;
       gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700px;
        padding-top: 22px;
    }
    .ErrorColor{
        color: red;
        font-weight: 800;
    }
`

const Box = styled.div `
    cursor: pointer;
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white") } ;
`