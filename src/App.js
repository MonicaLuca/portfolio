import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav'
import Introduction from './components/introduction';

function App() {
  return (
     <div className="App">
      <header className="App-header">
      <Introduction></Introduction>
      </header>
    </div>
 
  );
}

export default App;
