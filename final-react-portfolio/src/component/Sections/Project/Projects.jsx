import React from 'react';
import './Projects.css';
import ProjectTile from './ProjectTile';
import portfolioImage from '../../Images/portfolioScreenShot.png';
import budgetCalcSS from '../../Images/budgetCalcSS.png';
import italianSS from '../../Images/italianScreenShot.png';
import theStory from '../../Images/TheStory.png';


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
                ButtonName="View Code"
                Image={portfolioImage}/>
                <ProjectTile 
                Header="Budget Calculator"
                Text="This application was created using HTML, CSS and JavaScript. This website
                allows a user to calculate their monthly expenses."
                Link="https://joshuatsmith96.github.io/Budget-Planner-Application/"
                ButtonName="View Live"
                Image={budgetCalcSS}/>
                <ProjectTile 
                Header="Italian Restaurant"
                Text="This application was created using HTML, CSS and JavaScript. This is a mock-up of
                an italian restaurant. This website features a table reservation application."
                Link="https://joshuatsmith96.github.io/ItalianRestaurant/"
                ButtonName="View Live"
                Image={italianSS}/>
                <ProjectTile 
                Header="'The Story'"
                Text="This application was created using Python. This game is a story driven, 
                text based adventure game where your decisions have consequences."
                Link="https://github.com/joshuatsmith96/theStory"
                ButtonName="View Code"
                Image={theStory}/>
            </div>
        </div>
    )
}

export default Projects;
