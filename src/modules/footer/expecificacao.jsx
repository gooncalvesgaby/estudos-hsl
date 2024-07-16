import React from 'react';
import {Fabricacao, Paragraph} from './styleFooter';


function Expecificacao(props) {
    return(
        <Fabricacao>
            <Paragraph>{props.expecificacao}</Paragraph>
        </Fabricacao>
    );
}

export default Expecificacao;