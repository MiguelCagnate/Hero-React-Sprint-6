import styled from "styled-components";

export const Buttons = styled.button`
background-color: transparent;
  border: 1px;
  color: aliceblue;
  padding: 15px 32px;
  text-align: center;
  text-shadow: 3px 3px 3px #ababab;
  margin: 4px 6px;
  cursor: pointer;
  display: inline-block;  
  border-style: groove; 
  border-radius: 9px; 
  align-items: center; 
  font-size: 19px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  width: 49%;
  .Buttons { 
  border: none; 
  transition: 0.3s;
}

.Buttons:hover {
  background-color: #3e8e41;
  color: white;
} 
  
`;

export const Paragraph = styled.div`
  font-size: 17px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: black;
  border-radius: 35px;
  margin: 15px;
  padding: 10px;
  border-width: 1px;  
  text-align: center;
  border-style: groove;

  
`;

export const BackgroundPage = styled.div`
  font-size: 33px;
  font-family: monospace;
  font-weight: bold;
  text-shadow: 3px 3px 3px #ababab;
  color: #006ee9;  
  text-align: center; 
  background-image: url('/captain_future.jpg');      
  background-size: cover;
  background-repeat: no-repeat; 
  border-radius: 100px; 
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);

 `;
export const ButtonStart = styled.div`
  font-size: 19px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
  background-color: aliceblue;
  color: #006ee9;
  margin: 19px; 
  border-radius: 35px;
  margin-left: 40%;
  margin-right: 40%;
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;     
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  cursor: pointer;
    
`;

