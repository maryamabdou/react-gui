import React from 'react';
import Header from './home/header';
import Home from './home/home';
import './App.css'

const App = () => {
  return(
    <div className='App'>
      <Header />
      <div className='content'>
        <Home />
      </div>
    </div>
  );
}

export default App;
