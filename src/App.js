import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import {ContractProvider} from './components/ContractProvider';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Barrels from './components/Barrels';
import ThreePlayground from './components/ThreePlayground';
import Footer from './components/Footer';

// import bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles/Main.css';

import {useEffect} from 'react';
import { useWeb3React } from '@web3-react/core';
import { tryConnect } from './utils/tryWeb3Connect';

function App() {

  const web3React = useWeb3React();
  useEffect(() => {
    
    tryConnect(web3React);

  }, [])
  
  return (
    <ContractProvider>
      <Router>
        <div className="App">
          <Header />
          <div className='content' style={{background: 'url("/images/barrels.jpg")'}}>
            <Switch>
              <Route path="/barrels">
                <Barrels />
              </Route>
              <Route path='/dashboard'>
                <Dashboard />
              </Route>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/three'>
                <ThreePlayground />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </div>

          <Footer />
        </div>
      </Router>
    </ContractProvider>
  );
}

export default App;
