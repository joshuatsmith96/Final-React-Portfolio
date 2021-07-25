import React from 'react';
import './Skills.css';
import SkillTile from './SkillTile';
import accessIcon from '../../Images/Icons/access.png';
import aspIcon from '../../Images/Icons/asp.png';
import cssIcon from '../../Images/Icons/css.png';
import htmlIcon from '../../Images/Icons/html.png';
import jsIcon from '../../Images/Icons/javascript.png';
import ppIcon from '../../Images/Icons/powerpoint.png';
import sqlIcon from '../../Images/Icons/sql.png';
import pythonIcon from '../../Images/Icons/python.png';
import wordIcon from '../../Images/Icons/word.png';
import excelIcon from '../../Images/Icons/excel.png';


const Skills = (props) => {

    return (
        <div className="Skills">
            <h1>Skills</h1>
            <div className="tileHolder">
                <SkillTile 
                Header="Html"
                Image={htmlIcon}/>
                <SkillTile 
                Header="Css"
                Image={cssIcon}/>
                <SkillTile 
                Header="JavaScript"
                Image={jsIcon}/>
                <SkillTile 
                Header="MySQL"
                Image={sqlIcon}/>
                <SkillTile 
                Header="Python"
                Image={pythonIcon}/>
                <SkillTile 
                Header="MS Word"
                Image={wordIcon}/>
                <SkillTile 
                Header="MS Access"
                Image={accessIcon}/>
                <SkillTile 
                Header="ASP.NET "
                Image={aspIcon}/>
                <SkillTile 
                Header="Power Point"
                Image={ppIcon}/>
                <SkillTile 
                Header="MS Excel"
                Image={excelIcon}/>
            </div>
        </div>
    )
}

export default Skills;
