import React from 'react';
import { LogoImage } from './styleFooter';
import LogoSrc from '../../assets/frame.png'; 


function Logo() {
    return <LogoImage src={LogoSrc} alt="Logo" />;  
}

export default Logo;
