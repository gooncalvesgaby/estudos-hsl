import React from 'react';
import { SocialMediaList, SocialMediaIcon,Social,Titulo } from './styleFooter';

import Btn from './button';

import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import pinterest from '../../assets/pinterest.png';
import linkedin from '../../assets/linkedin.png';
import youtube from '../../assets/youtube.png';

function Icones(props) {
    return (
        <Social>
            <Titulo>{props.titulo}</Titulo>
            <SocialMediaList>
                <SocialMediaIcon href="#"><img src={facebook} alt="Facebook" /></SocialMediaIcon>
                <SocialMediaIcon href="#"><img src={twitter} alt="Twitter" /></SocialMediaIcon>
                <SocialMediaIcon href="#"><img src={linkedin} alt="LinkedIn" /></SocialMediaIcon>
                <SocialMediaIcon href="#"><img src={youtube} alt="YouTube" /></SocialMediaIcon>
                <SocialMediaIcon href="#"><img src={instagram} alt="Instagram" /></SocialMediaIcon>
                <SocialMediaIcon href="#"><img src={pinterest} alt="Pinterest" /></SocialMediaIcon>
            </SocialMediaList>
            <Btn btn={props.btn} />
        </Social>
    );  
}

export default Icones;
