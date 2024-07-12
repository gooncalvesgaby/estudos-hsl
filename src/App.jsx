import React from "react"
import {createGlobalStyle} from "styled-components"
import Button from "./Components/Button/button.jsx"
import Inicio from "./Components/Inicio/inicio.jsx"

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
    {/* <Button text="JOIN HYDRA"></Button> */}
    </>
  )
}

export default App

