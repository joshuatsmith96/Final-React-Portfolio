import React from 'react';

const ViewProjectButton = (props) => {

    let content;


    const portfolioContent = {
        Header: "Portfolio Website",
        Text: "This portfolio website was created using HTML, CSS, JavaScript and the React framework",
        Link: "https://github.com/joshuatsmith96/Final-React-Portfolio",
        Value: 1
    }

    const budgetCalcContent = {
        Header: "Budget Calculator",
        Text: "Budgeting application used to create a sustainable budget plan.",
        Link: "https://joshuatsmith96.github.io/Budget-Planner-Application/",
        Value: 2
    }



    function viewProjectHandler(){
        const viewer = document.getElementsByClassName("ProjectViewer")
        const content = props.Content

        viewer[0].style.display="flex";

        
    }

    return(
        <div>
            <button className="viewProjectButton" onClick={viewProjectHandler} >View Project Details</button>
        </div>
    )
}

export default ViewProjectButton;