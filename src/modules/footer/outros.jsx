import React from 'react';
import { MenuList, MenuItem} from './styleFooter';

function Outros(props) {
    return (
        <MenuList>
            {props.outros.map((outros, index) => (
                <MenuItem key={index}>{outros}</MenuItem>
            ))}
        </MenuList>
    );
}

export default Outros;