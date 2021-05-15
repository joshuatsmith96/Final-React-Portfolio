import React from 'react';
import './NavButton.css';


const NavButton = (props) => {
    let mobNav = document.getElementsByClassName("MobileNav");
    let navlist = document.getElementsByClassName("navList");
    let exit = document.getElementsByClassName("exit");

    const transition = () =>{
        mobNav[0].style.right="0%";
        exit[0].style.opacity=".7";
        navlist[0].style.flex="3";

    }

    return (
        <div className="NavButton">
            <div onClick={transition} className="buttonIcon">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default NavButton;
