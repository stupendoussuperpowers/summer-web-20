import React from "react";
import {Song} from "./Song";
import {NowPlaying} from './NowPlaying';
export class Songlist extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            nowplaying: "-1"
        }
        this.click = this.click.bind(this);
        }
    click(id) {
        
            this.setState({nowplaying:id});
            console.log(this.state);
      }
    
    render(){
        return(
            <div>
            <div className="song-list">
                <Song id="1" title="21 Guns" action={() =>this.click("1")} np={this.state.nowplaying} dur="4:00"  />
                <Song id="2" title="Song of the Century" action={() =>this.click("2")} np={this.state.nowplaying} dur="4:00"/>
                <Song id="3" title="Know Your Enemy" action={() =>this.click("3")} np={this.state.nowplaying} dur="4:00"/>
                <Song id="4" title="See the Light" action={() =>this.click("4")} np={this.state.nowplaying} dur="4:00"/>
                <Song id="5" title="Relentless Heart Syndrome" action={() =>this.click("5")} np={this.state.nowplaying} dur="4:00"/>
            </div>
            <NowPlaying np={this.state.nowplaying}/>
            </div>
        )
    }
}

export default Songlist;
