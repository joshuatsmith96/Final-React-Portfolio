import React from 'react';
import './Projects.css';
import ProjectTile from './ProjectTile';
import portfolioImage from '../../Images/portfolioScreenShot.png';
import budgetCalcSS from '../../Images/budgetCalcSS.png';


const Projects = (props) => {

    return (
        <div className="Projects">
            <h1>Projects</h1>
            <div className="projectHolder">
                <ProjectTile 
                Header="Portfolio Website"
                Text="This portfolio website was created using HTML, CSS, JavaScript
                and the React Framework."
                Link="https://www.github.com"
                Image={portfolioImage}/>
                <ProjectTile 
                Header="Budget Calculator"
                Text="This application was created using HTML, CSS and JavaScript. This website
                allows a user to calculate their monthly expenses."
                Link="https://joshuatsmith96.github.io/Budget-Planner-Application/"
                Image={budgetCalcSS}/>
            </div>
        </div>
    )
}

export default Projects;
