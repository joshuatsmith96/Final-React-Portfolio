import React from 'react';
import './InfoBar.css';


const InfoBar = (props) => {

    return (
        <div className="InfoBar">
            <h3>{props.Text}</h3>
            <div className="InfoImage">
                <img src={props.Image} alt={props.Alt} />
            </div>
        </div>
    )
}

export default InfoBar;
