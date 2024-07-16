import React from 'react';
import {FooterContainer, Line,HrStyle} from './styleFooter';

import Logo from './logo';
import Menu from './menu';
import Outros from './outros';
import Expecificacao from './expecificacao';
import Icones from './icones';

function Footer(props) {
    return (
        <div>
        <FooterContainer>
                <Logo />
                <HrStyle/>
                <Menu links={props.links} />
                <HrStyle/>
                <Outros outros={props.outros} />
                <HrStyle/>
                <Icones titulo={props.titulo}  btn={props.btn}/>
        </FooterContainer>
        <Line>
        <hr style={{ 
                    width: '1000px',
                    height: '0px',
                    left: '87px',
                    top: '5472px'
                }}/>
        </Line>
        <Expecificacao expecificacao={props.expecificacao}/>
        </div>
    );
}


export default Footer;


