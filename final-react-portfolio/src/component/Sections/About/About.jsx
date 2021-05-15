import React from 'react';
import './About.css';
import Article from '../../Articles/Article';


const About = (props) => {

    return (
        <div className="About">
            <Article 
            Header="Who is Joshua?"
            Text="Joshua Smith is a US Army Veteran, and an aspiring
            Front-End Web Developer. He currently attends the Anoka
            Technical College in Anoka, MN. He will graduate in March of
            2022."/>
            <Article 
            Header="Relevant Experience"
            Text="Although Joshua does not have any on the job experience
            with Web Development, he has been designing, practicing, and perfecting
            the way he creates websites for over a year."/>
        </div>
    )
}

export default About;
