import React from 'react';
import { StepWrapper, StepNumber, StepTitle } from './styleCuriosidades';

const Step = ({ number, title }) => {
    return (
        <>
        <StepWrapper>
            <StepNumber>{number}</StepNumber>
        </StepWrapper>
        <br />
        <br />
        <StepTitle>{title}</StepTitle>
        </>
    );
}

export default Step;
