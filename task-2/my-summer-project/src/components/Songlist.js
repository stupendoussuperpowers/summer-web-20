import React from "react";
import {Song} from "./Song";
import {NowPlaying} from './NowPlaying';
export class Songlist extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            nowplaying: "-1",
            tracks: []
        }
        this.click = this.click.bind(this);
        }
    click(id) {
        
            this.setState({nowplaying:id});
            console.log(this.state);
      }
    todur = function (sec_num) {
        // var sec_num = parseInt(this, 10); // don't forget the second param
        sec_num = sec_num/1000;
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = Math.floor(sec_num - (hours * 3600) - (minutes * 60));
    
        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        return minutes+':'+seconds;
    }
      componentDidMount(){
        fetch("https://musicbrainz.org/ws/2/release/9d6d1e4c-bc3b-4a8e-82bc-5ea5ef36bc02?inc=aliases+artist-credits+labels+discids+recordings&fmt=json")
        .then(res => res.json())
        .then(data => {
            console.log(data.media[0].tracks);
            // console.log(data.title);
            this.setState({
                tracks : data.media[0].tracks
            })
        })
    }
    
    render(){
        return(
            <div>
            <div className="song-list">
                {this.state.tracks.map((val,ind) => (
                    
                    <Song id={this.state.tracks[ind].position} title={this.state.tracks[ind].title} action={() =>this.click(ind+1)} np={this.state.nowplaying} dur={this.todur(this.state.tracks[ind].length)}  />
                ))}
                
            </div>
            <NowPlaying np={this.state.nowplaying}/>
            </div>
        );
    }
}

export default Songlist;

// Here are the details of your new API account.

// Application name	.
// API key	975b099fafe0b9bf50c415cd68b52c2d
// Shared secret	5974fb8e2d2926c9b7efc16dde69ac4e
// Registered to	bdyutish