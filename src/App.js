import { Frases } from "./data/data";
import { Paragraph } from "./styled";


export function App() {

  return (

    Frases.map((element, index) =>
   
<div key={index}> 

<Paragraph>{element}</Paragraph>
</div>
  ));
}


