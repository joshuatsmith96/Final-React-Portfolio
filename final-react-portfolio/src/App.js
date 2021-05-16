import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import MobileNav from './component/MobileNav/MobileNav';
import CarouselContainer from './component/CarouselContainer';
import About from './component/Sections/About/About';
import InfoBar from './component/Articles/InfoBar';
import BriefCase from './component/Images/Icons/briefcase.png';
import Skills from './component/Articles/SkillsArticle/Skills';
import Projects from './component/Articles/ProjectArticle/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <MobileNav />
      <CarouselContainer />
      <InfoBar 
      Text="Ready To Work"
      Image={BriefCase}/>
      <About />
      <Skills 
      Header="Skills"/>
      <Projects />
    </div>
  );
}

export default App;
