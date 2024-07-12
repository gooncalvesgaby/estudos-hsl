import React from "react"
import {createGlobalStyle} from "styled-components"
import Button from "./Components/Button/button.jsx"

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
    <Button/>
    </>
  )
}

export default App

