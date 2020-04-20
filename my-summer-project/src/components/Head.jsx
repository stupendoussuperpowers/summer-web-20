import React from "react";
import Spotify from "./images/spotify.JPG";

function Head()
{
    return <div>      
    <img className="spotify" src={Spotify} alt="spotify"></img>
    <h3 className="album">Album</h3>
    <h1 className="rhea">Rhea</h1>
    
    </div>
}
export default Head;