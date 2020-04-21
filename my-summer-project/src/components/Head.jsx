import React, { Component } from "react";
import Spotify from "./images/spotify.JPG";



class Head extends Component
{
    render(){return <div>
    <img className="spotify" src={Spotify} alt="spotify"></img>    
    <h3 className="album">Album</h3>
    <h1 className="rhea">Rhea</h1> 
    <button className="myButton">Play</button>
    
    </div>
    }
}
export default Head;