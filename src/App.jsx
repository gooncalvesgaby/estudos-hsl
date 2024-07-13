import React from "react"
import {createGlobalStyle} from "styled-components"
import Inicio from "./Components/Inicio/inicio.jsx"
import Main from "./Components/Main/main.jsx"

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

function App() {
  return (
    <>
    <GlobalStyle/>
    <Inicio/>
    <Main/>
    </>
  )
}

export default App

