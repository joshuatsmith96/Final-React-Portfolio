import React from 'react';
import './Projects.css';
import ProjectTile from './ProjectTile';


const Projects = (props) => {

    return (
        <div className="Projects">
            <h1>Projects</h1>
            <div className="projectHolder">
                <ProjectTile 
                Header="Portfolio Website"
                Text="This portfolio website was created using HTML, CSS, JavaScript
                and the React Framework."
                Link="https://www.github.com"/>
                <ProjectTile 
                Header="Budget Calculator"
                Text="This application was created using HTML, CSS and JavaScript. This website
                allows a user to calculate their monthly expenses."
                Link="https://www.github.com"/>
                <h2>More Projects Coming Soon</h2>
            </div>
        </div>
    )
}

export default Projects;
