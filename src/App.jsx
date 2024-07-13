import React from "react"
import {createGlobalStyle} from "styled-components"
import Header from "./Components/Header/header.jsx"
import Main from "./Components/Main/main.jsx"
import Location from "./Components/Location/location.jsx"

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
    <Header/>
    <Main/>
    <Location/>
    </>
  )
}

export default App

