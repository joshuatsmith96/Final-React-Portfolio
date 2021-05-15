import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import MobileNav from './component/MobileNav/MobileNav';
import CarouselContainer from './component/CarouselContainer';
import About from './component/Sections/About/About';
import InfoBar from './component/Articles/InfoBar';
import BriefCase from './component/Images/Icons/briefcase.png';

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
    </div>
  );
}

export default App;
