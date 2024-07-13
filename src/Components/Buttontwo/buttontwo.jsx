import React from "react";
import * as S from "./buttontwoStyle.jsx";

function Button(props){
    return(
        <>
        <S.Button>{props.text}</S.Button>
        </>
    )
}

export default Button