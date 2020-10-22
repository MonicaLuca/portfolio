import React from 'react';
import './App.css';
import Introduction from './components/introduction';
import SideNav from './components/sideNav';
import About from './components/about';

function App() {
  return (
     <div className="App">
      <header className="App-header">
      <Introduction></Introduction>
      </header>
      <section>
      <SideNav></SideNav>
      </section>
      <section>
      <About></About>
      </section>
    </div>
 
  );
}

export default App;
