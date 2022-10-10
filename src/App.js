import { useState, useEffect } from "react";
import { Frases } from "./data/data";
import { BackgroundPage, Buttons, ButtonStart, Paragraph } from "./styled";
import "./components/Escena/ChangeColor.css";

export function App() {
  const [Change, setChange] = useState(0);
  const [isDetailVisible, toggleDetail] = useState(false);

  const changeButton = (e, text) => {
    e.preventDefault();
    if (text === "NEXT" && Change !== 3) {
      return setChange(Change + 1);
    }
    if (text === "PREVIOUS" && Change !== 0) {
      return setChange(Change - 1);
    }
  };

  useEffect(() => {
    if (isDetailVisible) {
      const images = ["one", "two", "three", "four"];
      const bg = images[Change];
      document.body.style.backgroundImage = `url(/img/${bg}.jpg)`;
      document.body.style.backgroundSize = 'cover';
    }
  }, [Change, isDetailVisible]);

  const frases = Frases.map((element, index) => (
    <Paragraph key={index} className={`${index === Change ? "nuColor" : " "}`}>
      {element.txt}
    </Paragraph>
  ));

  return (
    <div>
      {isDetailVisible ? (
        <>
          <Buttons onClick={(e) => changeButton(e, "PREVIOUS")} type="button">
            ⏪Previous
          </Buttons>
          <Buttons onClick={(e) => changeButton(e, "NEXT")} type="button">
            Next⏭
          </Buttons>
          {frases}
        </>
      ) : (
        <BackgroundPage>         
          <h1>Benvinguts</h1>
          <h3>Aquesta és la història d'un superheroi galàctic 🦹‍♀️</h3>
          <ButtonStart type="button" onClick={() => toggleDetail(true)}>
            START!▶️
          </ButtonStart>
        </BackgroundPage>
      )}
    </div>
  );
}
