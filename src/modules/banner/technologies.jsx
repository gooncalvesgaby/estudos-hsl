import React, { useState, useEffect } from "react";

import TechnologyCard from './technologyCard';
import unreal from '../../assets/unreal.png';
import unity from '../../assets/unity.png';
import oculus from '../../assets/oculus.png';
import vive from '../../assets/vive.png';

import { TechnologiesSection,CarouselContainer, NavButton } from "./styledBanner";


function Technologies() {
    const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 900px)").matches);
    const [currentStep, setCurrentStep] = useState(0);
    const steps = [
        { src: unreal, alt: "Unreal Engine" },
        { src: unity, alt: "Unity" },
        { src: oculus, alt: "Oculus" },
        { src: vive, alt: "Vive" }
    ];

    const nextStep = () => {
        setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
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
        <TechnologiesSection>
            {isMobile ? (
                <CarouselContainer>
                    <NavButton onClick={prevStep}>{"<"}</NavButton>
                    <TechnologyCard src={steps[currentStep].src} alt={steps[currentStep].alt} />
                    <NavButton onClick={nextStep}>{">"}</NavButton>
                </CarouselContainer>
            ) : (
                steps.map((step, index) => (
                    <TechnologyCard key={index} src={step.src} alt={step.alt} />
                ))
            )}
        </TechnologiesSection>
    );
}

export default Technologies;