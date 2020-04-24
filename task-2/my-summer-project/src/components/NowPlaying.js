import React from "react";

export class NowPlaying extends React.Component{
    constructor(props) {
        super(props);
        
        }
   
    render(){
        return this.props.np!=-1?(
            <div className="now-playing">
                
               Now playing: {this.props.np}
            </div>
        ):(
            <div></div>
        )
    }
}

export default NowPlaying;