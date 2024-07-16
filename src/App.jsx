import React from "react"


// Styles
import {createGlobalStyle} from "styled-components";
import Tecnologias from "./modules/tecnologia/tecnologias";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    // background-color: #302C42;
    font-family: 'Montserrat';
  }
  
  .principal{
    background: #302C42;
  }
`;

function App() {
  return (
    <div className="principal">
      <GlobalStyle />
      <Tecnologias></Tecnologias>
    </div>
  )
}

export default App
