import './App.css';
import Home from './component/Sections/Home/Home';
import Loading from './component/Sections/Loading/Loading';

function App() {
  return (
    <div className="App">
      <Home />
      {isLoading && <Loading />}
    </div>
  );
}

export default App;
