import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import './components/style.css'
import image from './spotify.png'
import songs from'./components/songlist'
import Mybutton from './components/button'

function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="info">
      <img className="image" src={image} alt="image"/>
      {/*<button className="button">P A U S E</button>*/}
      <Mybutton/> 
      </div> 
     <div className="info">
     <h1>Album:</h1>
     <h1>Playing:</h1>
     </div>
     
     </div>
     <div>
     <h1 className="text">Songs</h1>
     </div>
  {songs.map(item => 
  <div className="key">
    <h1>{item.id}. {item.name}</h1>
  <h3>Artist: {item.artist}</h3>
    <hr></hr>
  </div>)}
    </div>
  );
}

export default App;
