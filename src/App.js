import logo from './logo.svg';
import './App.css';

import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Barrels from './components/Barrels';
import Footer from './components/Footer';

// import bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Main.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='content'>
          <Switch>
            <Route path='/home'>

            </Route>
            <Route path="/barrels">
              <Barrels />
            </Route>
            <Route path='/dashboard'>
              <Dashboard />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
