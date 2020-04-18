import React, {Component} from 'react'

class Playlist extends Component{
    render(){
        return(
            <div id="playlist">
            <p text-ailgn="left">Your Playlist</p>
            <div className="song">
            <br/>
                <b>In The End</b>
                <p className="thin">Linkin Park</p>
            </div>
            <div className="song">
            <br/>
                <b>Castle Of Glass</b>
                <p className="thin">Linkin Park</p>
            </div>
            <div className="song">
            <br/>
                <b>Bohemian Rhapsody</b>
                <p className="thin">Queen</p>
            </div>
            <div className="song">
            <br/>
                <b>We Will Rock You</b>
                <p className="thin">Queen</p>
            </div>
            </div>
            
        )
    }
}

export default Playlist