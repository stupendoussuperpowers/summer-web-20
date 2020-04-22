import React, { Component } from "react";
class Card extends Component{
    render(){
        return <div className="card" onClick={this.props.toggleState} >

            <h3 className="song">{this.props.id}) {this.props.name}</h3>
            <h6 className="artist">Artist-{this.props.artist}</h6>
        <hr></hr>
        </div>
    }
}
export default Card;