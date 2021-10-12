import React from 'react';
import './Projects.css';
import ProjectTile from './ProjectTile';
import portfolioImage from '../../Images/portfolioScreenShot.png';
import budgetCalcImage from '../../Images/budgetCalc.png';

const Projects = (props) => {

    const portfolioContent = props.portfolioContent;
    const budgetCalcContent = props.budgetCalcContent;

    return (
        <div className="Projects">
            <h1>Projects</h1>
            <div className="projectHolder">

                <ProjectTile 
                Header={portfolioContent.Header}
                Text={portfolioContent.Text}
                Link={portfolioContent.Link}
                Image={portfolioImage}
                Content={portfolioContent}
                Value="1"/>
                <ProjectTile 
                Header="Budget Calculator"
                Text="Budgeting application used to create a sustainable budget plan."
                Link="https://joshuatsmith96.github.io/Budget-Planner-Application/"
                Image={budgetCalcImage}
                Content={budgetCalcContent}
                Value="2"/>

            </div>
        </div>
    )
}

export default Projects;
