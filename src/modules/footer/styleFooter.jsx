import styled from "styled-components";

export const FooterContainer = styled.footer`
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;
    color: #fff;
    flex-wrap: wrap;
    margin-top: 80px;
    text-align: center;

    @media only screen and (min-width: 900px) {
        display: flex;
        text-align: justify;
    }
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const LogoImage = styled.img`
    width: 150px;
    height: auto;
    margin-bottom: 10px;
    padding: 10px;
    
    filter: drop-shadow(0px 10px 6px rgba(0, 0, 0, 0.25));

`;

export const MenuList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media only screen and (max-width: 900px) {
        display: none;
    }
`;

export const MenuItem = styled.li`
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
        color: #ccc;
    }
`;

export const SocialMediaList = styled.div`
    display: flex;
    padding: 10px;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
`;

export const SocialMediaIcon = styled.a`
    img {
        width: 40px;
        height: 40px;
        padding: 5px;
    }
`;

export const Social = styled.div`
    text-align: center;
`

export const Titulo = styled.h2`
    font-size: 16px;
    padding-bottom: 20px;
`

export const BuildButton = styled.button`
    background: linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%);
    border-radius: 40px;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #5e35b1;
    }
`;

export const Copyright = styled.div`
    text-align: center;
    width: 100%;
    margin-top: 20px;
    font-size: 14px;
`;

export const Fabricacao = styled.div`
    padding: 30px;
    text-align: center;
    color: #FFFFFF;
`;

export const Paragraph = styled.p`
    font-size: 14px;
`

export const Line = styled.div`
        display: flex;
        justify-content: center;
`

export const HrStyle = styled.hr`
    width: 0px;
    height: 196px;
    left: 975px;
    top: 5206px;

    @media only screen and (max-width: 900px) {
        display: none;
    }
`