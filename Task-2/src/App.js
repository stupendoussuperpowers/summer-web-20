import React from 'react';
import './App.css';
import Card from './components/card';
import Head from './components/head'
import songs from './components/songs'


function App() {
  return (
    <div className="App">
      <Head></Head>
      <ul className = "songlist">
        {songs.map((value, index) => {
          return <li key={index}><Card name = {value.name} singer = {value.singer}></Card></li>
        })}
      </ul>      
    </div>
  );
}

export default App;
