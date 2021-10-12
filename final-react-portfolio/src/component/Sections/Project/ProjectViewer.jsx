import React from 'react';
import './ProjectViewer.css';


const ProjectViewer = (props) => {

    // This function closes the window
    function exitViewerFunction(){
        const viewer = document.getElementsByClassName("ProjectViewer")
        viewer[0].style.display="none";
    }

    return (
        <div className="ProjectViewer">
            <div className="viewer">
                <div className="exitButtonDiv">
                    <button className="exitViewerButton" onClick={exitViewerFunction}>X</button>
                </div>
                <h1 id="projectName"></h1>
                <div className="projectLanguages">
                    <h2 className="languageUsedLabel">Languages Used: </h2>
                    <h2 id="languageUsed"></h2>
                </div>
                <div className="descriptionDiv">
                    <h3 id="description"></h3>
                </div>
                <div className="viewTypes">
                    <a id="viewSiteButton" target="_blank" rel="noopener noreferrer">View Site</a>
                    <a id="viewCodeButton" target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectViewer;
