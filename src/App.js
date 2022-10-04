import { useState } from "react";
/* import { x } from "./components/styled"; */
import { Frases } from "./data/data";


function App() {


  return (
    Frases.map((element, index) =>
    <p key={index}>
    {element}
    </p>
  ));
}

export default App;
