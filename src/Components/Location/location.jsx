import React from "react";
import * as S from "./locationStyle.jsx"
import Local from "../assets/location.png"
import Shape from "../assets/shape.png"
import Phone from "../assets/phone.png"

function Location() {
    return (
        <S.Div>
            <S.Div2>
                <S.Img src={Local} alt="imagem de localização" />
                <S.NoFlex>
                    <h3>Pay Us a Visit</h3>
                    <p>Union St, Seattle, WA 98101, United States</p>
                </S.NoFlex>
            </S.Div2>
            <S.Div2>
                <S.Img src={Phone} alt="imagem de telefone" />
                <S.NoFlex>
                    <h3>Give Us a Call</h3>
                    <p>(110) 1111-1010</p>
                </S.NoFlex>
            </S.Div2>
            <S.Div2>
                <S.Img src={Shape} alt="imagem de localização" />
                <S.NoFlex>
                    <h3>Send Us a Message</h3>
                    <p>Contact@HydraVTech.com</p>
                </S.NoFlex>
            </S.Div2>

        </S.Div>
    )
}

export default Location