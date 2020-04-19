import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello';
import Message from './components/Message';
import Header from './components/Header';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Header />
      <Welcome />
      <Hello sr = "1" title = "Rare" time = "3:41" />
      <Hello sr = "2" title = "Lose You To Love Me" time = "3:27" />
      <Hello sr = "3" title = "Look at Her Now" time = "2:43" />
      <Hello sr = "4" title = "Dance Again" time = "2:51" />
      <Hello sr = "5" title = "Ring" time = "2:29" />
      <Hello sr = "6" title = "Vulnerable" time = "3:12" /> */}
    </div>
  );
}

export default App;
