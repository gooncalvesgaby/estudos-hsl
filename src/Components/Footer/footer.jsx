import React from "react";
import * as S from "./footerStyle.jsx";
import Card from "../Card/card.jsx"
import Simulation from "../assets/simulation.png"
import Education from "../assets/education.png"
import Selfcare from "../assets/selfcare.png"
import Outdoor from "../assets/outdoor.png"

function Footer(){
    return(
        <S.Footer>
            <Card image={Simulation}
                title="SIMULATION"
                text="Vitae sapien pellentesque
                      habitant morbi nunc."/>
            <Card image={Education}
                title="EDUCATION"
                text="Vitae sapien pellentesque
                      habitant morbi nunc."/>
            <Card image={Selfcare}
                title="SELF-CARE"
                text="Vitae sapien pellentesque
                      habitant morbi nunc."/>
            <Card image={Outdoor}
                title="OUTDOOR"
                text="Vitae sapien pellentesque
                      habitant morbi nunc."/>
        </S.Footer>
    )
}

export default Footer