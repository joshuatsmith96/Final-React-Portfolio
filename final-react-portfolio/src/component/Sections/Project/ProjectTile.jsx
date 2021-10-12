import React, { useState } from 'react';
import './ProjectTile.css';
import ProjectViewer from './ProjectViewer';


const ProjectTile = (props) => {

    const portfolioContent = {
        Header: "Portfolio Website",
        Text: "This is Joshua's Portfolio Website. You are currently looking at this project. On this website you can learn a little bit about Joshua, see what he has accomplished, and view his projects.",
        Languages: "HTML, REACT Frame Work, and JavaScript",
        Link: "https://github.com/joshuatsmith96/Final-React-Portfolio",
        Value: 1
    }

    const budgetCalcContent = {
        Header: "Budget Calculator",
        Text: "This budgeting calculator allows you to enter in your expenses in a list format, and the application will add up your total expenses for you. The user has the ability to delete any items that are on the list. Future updates for this project will allow you to save a copy of the report.",
        Languages: "HTML, REACT Frame Work, and JavaScript",
        Link: "https://joshuatsmith96.github.io/Budget-Planner-Application/",
        Value: 2
    }


    function viewProjectHandler(){
        const viewer = document.getElementsByClassName("ProjectViewer")
        viewer[0].style.display="flex";

        const projectName = document.getElementById("projectName");
        const languagesUsed = document.getElementById("languageUsed");
        const description = document.getElementById("description");
        const viewSite = document.getElementById("viewSiteButton");
        const viewCode = document.getElementById("viewCodeButton");

        //Value 1 is the portfolio website project
        if (props.Value === "1"){
            projectName.innerHTML = portfolioContent.Header
            languagesUsed.innerHTML = portfolioContent.Languages;
            description.innerHTML = portfolioContent.Text;
            viewCode.href="https://github.com/joshuatsmith96/Final-React-Portfolio/tree/main/final-react-portfolio";
            viewSite.style.display = "none";
        // Value 2 is the Budget Calculator project    
        } else if (props.Value === "2") {
            projectName.innerHTML = budgetCalcContent.Header
            languagesUsed.innerHTML = budgetCalcContent.Languages;
            description.innerHTML = budgetCalcContent.Text;
            viewCode.href="https://github.com/joshuatsmith96/Budget-Planner-Application/tree/main/budget-planner";
            viewSite.href="https://joshuatsmith96.github.io/budgetplanner/";
            viewSite.style.display = "block";
        }
    }

    return (
        <div className="ProjectTile">
            <h3>{props.Header}</h3>
            <img src={props.Image} alt={props.Alt} />
            <p>{props.Text}</p>
            <button className="viewProjectButton" onClick={viewProjectHandler} >View Project Details</button>
        </div>
    )
}

export default ProjectTile;
