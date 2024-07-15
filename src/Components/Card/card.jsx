import React from "react";
import * as S from "./cardStyle.jsx"
import Button from "../Button/button.jsx"

function Card(props) {
    return (
        <S.Card>
            <div>
            <S.Img src={props.image} />
            <S.H3>{props.title}</S.H3>
            <S.P>{props.text}</S.P>
            </div>
            <S.Div>
            <Button text="TRY IT NOWS" />
            </S.Div>
        </S.Card>
    )
}

export default Card