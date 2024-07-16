import styled from 'styled-components';

export const FormContainer = styled.div`
    width: 80%;
    border-radius: 20px;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    color: #fff;
    background: radial-gradient(50% 50% at 50% 50%, #403A5F 0%, #211E2E 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 100px;

    @media only screen and (min-width: 900px) {
        padding: 40px;
    }

    @media only screen and (max-width: 900px) {
        padding: 20px;
    }
`;

export const FormTitle = styled.h2`
    margin-bottom: 10px;
    font-size: 28px;
    font-weight: bold;
`;

export const FormSubtitle = styled.p`
    margin-bottom: 30px;
    font-size: 18px;
`;

export const FormRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
`;

export const Input = styled.input`
    background: none;
    padding: 12px;
    margin-bottom: 15px;
    color: #fff;
    font-size: 16px;
    width: 48%;
    border: 2px solid #FFFFFF;
    border-radius: 40px;
    box-sizing: border-box;

    &:focus {
        border-color: #915eff;
        outline: none;
    }

    &::placeholder {
        color: #aaa;
    }

    &[type='email'],
    &[type='text'] {
        width: 100%;
    }

    .eNa-dtd[type='email'], .eNa-dtd[type='text'] {
    width: auto;
}
`;



export const TextArea = styled.textarea`
        box-sizing: border-box;
        background: none;
        padding: 12px;
        margin-bottom: 15px;
        color: #ffff;
        font-size: 16px;
        width: 100%;
        resize: none;
        height: 210px;
        border: 2px solid #FFFFFF;
        border-radius: 40px;

    &:focus {
        border-color: #915eff;
        outline: none;
    }

    &::placeholder {
        color: #aaa;
    }
`;

export const Button = styled.button`
    border: none;
    padding: 15px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 15px;
    width: 214px;
    background: linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%);
        border-radius: 40px;

    &:hover {
        background-color: #7a45d1;
}
`;

export const StyledHr = styled.hr`
    // width: 414px;
    height: 0px;
    margin: 20px 0px;
`;