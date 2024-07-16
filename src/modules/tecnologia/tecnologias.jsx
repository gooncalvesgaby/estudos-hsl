import React from "react";
import Banner from "../banner/banner";
import Curiosidades from "../curiosidades/curiosidade";
import Form from "../form/form";
import Footer from "../footer/footer";
import styled from "styled-components";

const Component = styled.div`
    max-width: 1500px;
    margin: 0 auto;
`

function Tecnologias() {
    return(
        <Component>
            <Banner 
                title="TECHNOLOGIES & HARDWARE"
                subtitle="USED BY HYDRA VR."
            ></Banner>
            <Curiosidades></Curiosidades>
            <Form
                text="JOIN HYDRA"
                about="Let's Build Your VR Experience"
                btn="SEND TO HYDRA"
            ></Form>
            <Footer 
                name="Lara" 
                links={["ABOUT","SERVICES","TECHNOLOGIES","HOW TO","JOIN HYDRA"]}
                outros={["F.A.Q", "SITEMAP", "CONDITIONS", "LICENSES"]} 
                btn="BUILD YOUR WORLD"
                titulo="SOCIALIZE WITH HYDRA"
                expecificacao="2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED "
            ></Footer>
        </Component>
    );
}

export default Tecnologias;