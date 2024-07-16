import styled from 'styled-components';

export const Container = styled.div`
    color: white;
    margin-bottom: 80px;

    @media only screen and (min-width: 900px) {
        padding: 50px;
    }
`;

export const TextContainer = styled.div`
    justify-content: space-between;
    padding: 20px;
    display: flex;

    @media only screen and (max-width: 900px) {
        justify-content: center;
    }
`;

export const TitleWrapper = styled.h1`
    margin-bottom: 20px;
    font-weight: 700;
    line-height: 44px;
    color: #FFFFFF;

    @media only screen and (min-width: 900px) {
        width: 300px;
        font-size: 36px;
    }

    @media only screen and (max-width: 900px) {
        font-size: 26px;
        text-align: center;
    }
`;

export const Subtitle = styled.h2`
    margin-bottom: 20px;
    font-weight: 100;
    font-size: 36px;
    line-height: 44px;
    color: #FFFFFF;

    @media only screen and (min-width: 900px) {
        width: 330px;
    }

    @media only screen and (max-width: 900px) {
        font-size: 26px;
        text-align: center;
    }
`;

export const DescriptionWrapper = styled.p`
    margin-bottom: 40px;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    @media only screen and (min-width: 900px) {
        width: 650px;    
    }

    @media only screen and (max-width: 900px) {
        display: none;   
    }
`;

export const StepsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

`;

export const Ellipse = styled.div`
    position: relative;
    width: 198px;
    height: 198px;
    background: rgba(13, 13, 13, 0.32);
    border-radius: 50%;
    justify-content: center;
    align-items: center;
`;

export const StepWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 18px;
`;

export const StepNumber = styled.div`
    background: linear-gradient(251.27deg, #C0B7E8 12.87%, #8176AF 89.33%);
    border-radius: 50%;
    width: 159px;
    height: 159px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    color: black;
    margin-bottom: 10px;
`;

export const StepTitle = styled.div`
    font-size: 16px;
    text-align: center;
`;

export const Button = styled.button`
    display: none; /* Esconde os botões por padrão */
    background: none;
    border: none;
    color: #fff;
    font-size: 2em;
    cursor: pointer;
    outline: none;

    @media (max-width: 900px) {
        display: block; /* Mostra os botões em telas menores que 900px */
    }
`;
