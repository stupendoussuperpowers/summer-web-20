import React, { Component } from 'react';
import "../App.css";
class List extends Component {
    
    render() {
        return (
        <div>
            <button className="box" onClick={()=>{this.props.whenClicked()}}>
                <div className="songname" >
                    {this.props.name}
                </div>
                <div className="artistname" >
                    - {this.props.artist}
                </div>
                
            </button>                
        </div>
           
            
        );
    }
}

export default List;