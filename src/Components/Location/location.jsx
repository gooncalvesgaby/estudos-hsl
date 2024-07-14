import React from "react";
import * as S from "./locationStyle.jsx"
import Call from "../assets/call.png"
import Contact from "../assets/contact.png"
import Email from "../assets/email.png"
import Local from "../assets/location.png"
import Message from "../assets/message.png"
import Shape from "../assets/shape.png"
import United from "../assets/united.png"
import Visit from "../assets/visit.png"
import Phone from "../assets/phone.png"

function Location() {
    return (
            <S.Div>
                <S.Div2>
                    <S.Img src={Local} alt="" />
                    <S.Img src={Visit} alt="" />
                    <S.Img src={United} alt="" />
                </S.Div2>
                <S.Div3>
                    <S.Img src={Phone} alt="" />
                    <S.Img src={Call} alt="" />
                    <S.Img src={Contact} alt="" />
                </S.Div3>
                <S.Div4>
                    <S.Img src={Shape} alt="" />
                    <S.Img src={Message} alt="" />
                    <S.Img src={Email} alt="" />
                </S.Div4>
            </S.Div>
    )
}

export default Location