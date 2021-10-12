import React from 'react';
import './Home.css';
import Header from '../../Header';
import CarouselContainer from '../../CarouselContainer';
import BriefCase from '../../Images/Icons/briefcase.png';
import About from '../About/About';
import InfoBar from '../../Articles/InfoBar';
import Skills from '../Skills/Skills';
import Projects from '../Project/Projects';
import Footer from '../../Footer/Footer';
import ProjectViewer from '../Project/ProjectViewer';

const Home = (props) => {

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

    return (
        <div className="Home">
            <ProjectViewer 
            Content = {budgetCalcContent}/>
            <Header />
            <CarouselContainer />
            <InfoBar 
            Text="Ready To Work"
            Image={BriefCase}/>
            <About />
            <Skills />
            <Projects 
            portfolioContent = {portfolioContent}
            budgetCalcContent = {budgetCalcContent}/>
            <Footer />
        </div>
    )
}

export default Home;
