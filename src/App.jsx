import React from "react"
import {createGlobalStyle} from "styled-components"
import Header from "./Components/Header/header.jsx"
import Main from "./Components/Main/main.jsx"
import Footer from "./Components/Footer/footer.jsx"
import Tecnologias from "./modules/tecnologia/tecnologias";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat';
  }
  
  .principal{
    background: #302C42;
  }
`;

function App() {
  return (
    <div className="principal">
    <GlobalStyle/>
    <Header/>
    <Main/>
    <Footer/>
    <Tecnologias></Tecnologias>
    </div>
  )
}

export default App

