import React, { useState, useEffect } from 'react';
import { Container, StepsContainer, Ellipse, TextContainer, Button } from './styleCuriosidades';
import Step from './step';
import Title from './titulo';
import Description from './descricao';
import Sub from './sub';

const getSteps = () => {
    return [
        { number: '01', title: '3D Conception & Design' },
        { number: '02', title: 'Interaction Design' },
        { number: '03', title: 'VR World User Testing' },
        { number: '04', title: 'Hydra VR Deploy' }
    ];
};

function Curiosidades() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 900px)").matches);
    const steps = getSteps();

    const nextStep = () => {
        setCurrentStep((prevStep) => (prevStep + 1 ) % steps.length);
    };

    const prevStep = () => {
        setCurrentStep((prevStep) => (prevStep - 1 + steps.length) % steps.length);
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 900px)");
        const handleMediaQueryChange = (e) => {
            setIsMobile(e.matches);
        };
        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);

    return (
        <Container>
            <TextContainer> 
                <div style={{ width: '300px' }}>
                    <Title text="HOW WE BUILD" />
                    <Sub sub="WITH HYDRA VR?" />
                </div>
                <Description text="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae." />
            </TextContainer>
            <StepsContainer>
                {isMobile && <Button onClick={prevStep}>&#9664;</Button>}
                {isMobile ? (
                    <Ellipse>
                        <Step number={steps[currentStep].number} title={steps[currentStep].title} />
                    </Ellipse>
                ) : (
                    steps.map(step => (
                        <Ellipse key={step.number}>
                            <Step number={step.number} title={step.title} />
                        </Ellipse>
                    ))
                )}
                {isMobile && <Button onClick={nextStep}>&#9654;</Button>}
            </StepsContainer>
        </Container>
    );
}

export default Curiosidades;
