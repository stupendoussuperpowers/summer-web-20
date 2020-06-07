import React, { Component } from 'react';
import "../App.css";

class Current extends Component {
    render() {
        return (
            <div className="footer">
            <div className="foottext">
            {this.props.name}
            </div>
            <div className="foottext">
            <button className="playpause">
                PLAY
            </button>
            </div>
            </div>
            
           
        );
    }
}

export default Current;