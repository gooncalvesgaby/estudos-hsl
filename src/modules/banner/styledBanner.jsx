import styled from "styled-components";

import bannerImage from '../../assets/banner.png';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
}
`;


export const BannerContainer = styled.div`
    position: relative;
    width: 80%;
    background: url(${bannerImage}) no-repeat center center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    border-radius: 80px;

    @media only screen and (min-width: 900px) {
        height: 260px;
    }

    @media only screen and (max-width: 900px) {
        height: 160px;
    }
`;

export const BannerOverlay = styled.div`
    position: absolute;
    box-shadow: 0px 4px 4px rgba(192, 183, 232, 0.01);
    border-radius: 160px;

    @media only screen and (min-width: 900px) {
        width: 800px;
        height: 260px;
    }

    @media only screen and (max-width: 900px) {
        width: 80%;
        height: 160px;
    }
`;

export const BannerContent = styled.div`
    position: relative;
    z-index: 1;
`;

export const Title = styled.h1`
    font-size: 16px;
    padding: 10px;
`;

export const Subtitle = styled.h2`
    font-size: 24px;
    font-weight: 100;
`;


export const CarouselContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NavButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 10px;
    font-size: 24px;
    color: #B3A0FA;

    &:hover {
        color: #9677EB;
    }

    &:focus {
        outline: none;
    }
`;


export const TechnologiesSection = styled.div`
    justify-content: space-around;
    padding: 20px;
    margin-top: 20px;
    text-align: center;

    @media only screen and (min-width: 900px) {
        display: flex;
    }
`;

export const Card = styled.div`
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

export const Image = styled.img`
    width: 174px;
    opacity: 0.36;
`;
