import React from 'react';
import './header.css';
import HeaderTop from './headerTop';
import HeaderCenter from './headerCenter';
import HeaderBottom from './headerBottom';


function Header(){
    return (
        <header>
            <HeaderTop />
            <HeaderCenter />
            <HeaderBottom />
        </header>
    );

}

export default Header;


