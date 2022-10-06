import { useState } from "react";
import { Frases } from "./data/data";
import { BackgroundPage, Buttons } from "./styled";
import "./components/Escena/ChangeColor.css";

export function App() {
  const [Change, setChange] = useState(0);
  const changeButton = (e, text) => {
    e.preventDefault();
    if (text === "NEXT" && Change !== 3) {
      return setChange(Change + 1);
    }
    if (text === "PREVIOUS" && Change !== 0) {
      return setChange(Change - 1);
    }
  };
  const frases = Frases.map((element, index) => (
    <p key={index} className={`${index === Change ? "nuColor" : ""}`}>
      {element}
    </p>
  ));

  return (
    
    <div>
    <BackgroundPage>
  <h1>Benvinguts</h1>
   <p>Aquesta és la història d'un superheroi galàctic </p>
   <button type='button'>Start</button> <br/> <br/> <br/>   
  </BackgroundPage>


      <Buttons onClick={(e) => changeButton(e, "PREVIOUS")} type="button">
        Previous
      </Buttons>
      <Buttons onClick={(e) => changeButton(e, "NEXT")} type="button">
        Next
      </Buttons>
      <>{frases}</>
    </div>
  );
}
