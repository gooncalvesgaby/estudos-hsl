import React from "react";
import * as S from "./headerStyle.jsx"
import Button from "../Button/button.jsx"
import Buttontwo from "../Buttontwo/buttontwo.jsx"
import Frame from "../assets/frame.png"

function Header() {
    return (
        <S.Header>
            <S.Div>
            <S.Img src={Frame} alt="simbolo" />
                <S.Ul>
                    <S.Li>ABOUT</S.Li>
                    <S.Li>SERVICES</S.Li>
                    <S.Li>TECHNOLOGIES</S.Li>
                    <S.Li>HOW TO</S.Li>
                </S.Ul>
                <S.Div2>
                    <Buttontwo text="CONTACT US" />
                    <Button text="JOIN HYDRA" />
                </S.Div2>
            </S.Div>
        </S.Header>
    )
}

export default Header