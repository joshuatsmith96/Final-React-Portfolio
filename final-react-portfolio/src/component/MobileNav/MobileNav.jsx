import React from 'react';
import './MobileNav.css';


const MobileNav = (props) => {

    let mobNav = document.getElementsByClassName("MobileNav");
    let navlist = document.getElementsByClassName("navList");
    let exit = document.getElementsByClassName("exit");

    const close = () => {
        mobNav[0].style.right="100%";
        exit[0].style.opacity="0";
        navlist[0].style.flex="1";
    }


    return (
        <div className="MobileNav">
            <div className="navList">
                <h1>Menu</h1>
            </div>
            <div onClick={close} className="exit">
                <p>X</p>
            </div>
        </div>
    )
}

export default MobileNav;
