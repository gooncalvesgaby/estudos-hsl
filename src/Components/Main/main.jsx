import React from "react";
import * as S from "./mainStyle.jsx";
import Dive from "../assets/dive.png"
import Virtual from "../assets/virtual.png"
import Arrow from "../assets/arrow.png"
import Lorem from "../assets/lorem.png"
import Pexels from "../assets/pexels.png"
import Button from "../Button/button.jsx"


function Main() {
    return (
        <S.Main>
            <S.Div>
                <S.Div2>
                    <S.Img src={Dive} alt="parágrafo de titulo" />
                    <S.Img src={Virtual} alt="parágrafo de titulo" />
                    <S.Img src={Lorem} alt="parágrafo de texto" />
                </S.Div2>
                <S.Div3>
                    <Button text="BUILD YOUR WORLD" />
                    <S.Img2 src={Arrow} alt="seta para a direita" />
                </S.Div3>
                <S.Div4>
                    <S.Img3 src={Pexels} alt="mulher com óculos" />
                </S.Div4>
            </S.Div>
        </S.Main>
    )
}

export default Main