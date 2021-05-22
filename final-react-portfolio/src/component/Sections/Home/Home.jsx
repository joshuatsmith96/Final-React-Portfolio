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


const Home = (props) => {

    return (
        <div className="Home">
            <Header />
            <CarouselContainer />
            <InfoBar 
            Text="Ready To Work"
            Image={BriefCase}/>
            <About />
            <Skills />
            <Projects />
            <Footer />
        </div>
    )
}

export default Home;
