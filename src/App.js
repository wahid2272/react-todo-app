import React from 'react';
import Home from './components/home/Home';
import Header from './components/header/Header';
import About from './components/about/About';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';


function App() {
  return (
    <div>
      <Router>
        
          <CssBaseline />
            <Header />
          <Switch>
            <Route exact path="/">
                <Home />
             </Route>
             <Route exact path="/about">
                <About />
             </Route>
          </Switch>
        
      </Router>
    </div>
  );
}

export default App;
