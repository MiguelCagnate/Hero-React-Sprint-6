import styled from "styled-components";
import { Frases } from "./data/data";

const StyledP = styled.p`
    font-size: 19px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color:aquamarine;
    color: aliceblue;
    border-radius: 35px;
    margin: 15px;
    padding: 10px;
    text-shadow: 2px 2px 4px #000000;
    text-align: center;

`


export function App() {


  return (
    Frases.map((element, index) =>
    <StyledP>
<p key={index}>
    {element}
    </p>

    </StyledP>
  ));
}


