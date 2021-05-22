import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Home from './component/Sections/Home/Home';
import Loading from './component/Sections/Loading/Loading';

function App() {
  return <Router>
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Redirect to="/" />
  </Switch>

</Router>;
}

export default App;
