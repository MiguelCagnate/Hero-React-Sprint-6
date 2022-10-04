import { useState } from "react";
import { x } from "./components/styled"; 
import styled from "styled-components";
import { Frases } from "./data/data";

const StyledP = styled.p`
    font-size: 19px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color:aquamarine;
    color: black;
    border-radius: 35px;
    margin: 15px;
    padding: 10px;
    text-shadow: 2px 2px 8px #FF0000;

`


function App() {


  return (
    Frases.map((element, index) =>
    <StyledP>
<p key={index}>
    {element}
    </p>

    </StyledP>
  ));
}

export default App;
