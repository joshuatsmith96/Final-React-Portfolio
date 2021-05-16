import React from 'react';
import './SkillTile.css';


const SkillTile = (props) => {

    return (
        <div className="SkillTile">
            <h3>{props.Header}</h3>
            <img src={props.Image} alt={props.Alt} />
        </div>
    )
}

export default SkillTile;
