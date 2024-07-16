import React from 'react';
import { MenuList, MenuItem} from './styleFooter';
import Logo from './logo';

function Menu(props) {
    return (
        <MenuList>
            {props.links.map((link, index) => (
                <MenuItem key={index}>{link}</MenuItem>
            ))}
        </MenuList>
    );
}

export default Menu;