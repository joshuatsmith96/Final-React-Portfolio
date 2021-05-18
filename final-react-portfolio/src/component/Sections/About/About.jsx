import React from 'react';
import './About.css';
import Article from '../../Articles/Article';


const About = (props) => {

    return (
        <div className="About">
            <Article 
            Header="Who is Joshua?"
            Text="Joshua Smith is a US Army Veteran, and an aspiring Front-End Web Developer. He lives in 
            Minneapolis, MN and currently attends the Anoka Technical College in Anoka, MN. He will graduate
            in March of 2022."/>
            <Article 
            Header="Relevant Experience"
            Text="Joshua has been creating websites since early 2020. Before he began
            his journey into Web Development, Joshua was a 25Q (Satellite Technician) in the Army.
            As a communications and IT Specialist, he learned core troubleshooting techniques that he has
            translated to his new career path as a Web Developer. His ability to overcome technical challenges is
            among his strongest skills."/>
        </div>
    )
}

export default About;
