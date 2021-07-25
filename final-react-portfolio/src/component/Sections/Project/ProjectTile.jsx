import React from 'react';
import './ProjectTile.css';


const ProjectTile = (props) => {

    return (
        <div className="ProjectTile">
            <h3>{props.Header}</h3>
            <img src={props.Image} alt={props.Alt} />
            <p>{props.Text}</p>
            <a href={props.Link} target="_blank">{props.ButtonName}</a>
        </div>
    )
}

export default ProjectTile;
