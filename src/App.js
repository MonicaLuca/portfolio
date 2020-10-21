import React from 'react';
import './App.css';
import Introduction from './components/introduction';
import SideNav from './components/sideNav';

function App() {
  return (
     <div className="App">
      <header className="App-header">
      <Introduction></Introduction>
      </header>
      <SideNav></SideNav>
    </div>
 
  );
}

export default App;
