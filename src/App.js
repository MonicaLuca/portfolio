import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Introduction from './components/introduction';
import SideNav from './components/sideNav';
import About from './components/about';
import Projects from './components/projects';

function App() {
  return (
     <div className="App">
      <header className="App-header">
      <Introduction/>
      </header>
      <section>
      <Router>
      <SideNav/>
      <Route exact path = "/">
      <About/>
      </Route>
      <Route exact path = "/projects">
      <Projects/>
      </Route>
      </Router>
      </section>
    </div>
 
  );
}

export default App;
