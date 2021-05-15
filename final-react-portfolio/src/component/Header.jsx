import React from 'react';
import './Header.css';
import NavButton from './NavButton';


const Header = (props) => {

    return (
        <div className="Header">
            <NavButton />
            <h1>Joshua's Portfolio</h1>
        </div>
    )
}

export default Header;
