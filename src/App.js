import { useState } from "react";
import { Frases } from "./data/data";
import { BackgroundPage, Buttons, ButtonStart, Paragraph } from "./styled";
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
    <Paragraph key={index} className={`${index === Change ? "nuColor" :" "}`}>
       
     {element}
    
    </Paragraph>
   
  ));

  return (
    
    <div>
    <BackgroundPage>
   <h1>Benvinguts</h1>
   <>Aquesta és la història d'un superheroi galàctic 🦹‍♀️</><br/>      
   </BackgroundPage>
   <ButtonStart type='button'>START!▶️</ButtonStart>
   
   <br/><br/>  

      <Buttons onClick={(e) => changeButton(e, "PREVIOUS")} type="button">
      ⏪Previous
      </Buttons>
      <Buttons onClick={(e) => changeButton(e, "NEXT")} type="button">
        Next⏭
      </Buttons>
      <>{frases}</>
    </div>
  );
}
