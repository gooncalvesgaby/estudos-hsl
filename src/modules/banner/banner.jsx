import React from "react";

import Technologies from "./technologies";

import { Container,BannerContainer,BannerOverlay, BannerContent,Title, Subtitle } from "./styledBanner"; // Certifique-se de que esse componente existe e está corretamente importado

function Banner(props) {
    return (
        <Container>
            <BannerContainer>
                <BannerOverlay />
                <BannerContent>
                    <Title>{props.title}</Title>
                    <Subtitle>{props.subtitle}</Subtitle>
                </BannerContent>
            </BannerContainer>
            <Technologies />
        </Container>
    );
}

export default Banner;
