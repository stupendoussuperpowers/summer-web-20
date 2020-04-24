import React from "react";

export class Song extends React.Component{
    constructor(props) {
        super(props);
        this.state={nowPlaying:false}
      }
    
    render(){
        
        return this.props.id==this.props.np?(
            <div className="song-nowplaying">
               <div className="song-id">{this.props.id}</div>
               <div className="song-title" onClick={this.props.action}>{this.props.title}</div>
               <div className="song-dur">{this.props.dur}</div>
            </div>
            
        ):
        (
            <div className="song">
            <div className="song-id">{this.props.id}</div>
            <div className="song-title" onClick={this.props.action}>{this.props.title}</div>
            <div className="song-dur">{this.props.dur}</div>
            </div>
        )
    }
}

export default Song;