import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header";
import { Songlist } from './components/Songlist';

function App() {
  return (
    <div className="App">
      <Header albumtitle="21st Century Breakdown" />
      <Songlist />
      
    </div>
  );
}

export default App;
