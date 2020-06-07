import React, { Component } from 'react';
import "../App.css";
import Image from "../allout.JPG";

class Head extends Component {
    render() {
        return (
            <div>
                <div className="head">
            <img src={Image} alt="spotifyimage"></img>
            <div className="side">
            <div className="heading"><h4>PLAYLIST</h4></div> 
            <div className="heading"><h1>All Out 10s</h1></div>
            <div className="heading"><h4>The decade where EDM became mainstream  and hip-hop started to rule the world.</h4></div>
            </div>
            </div>
            </div>
            
        );
            
            
    }
}

export default Head;