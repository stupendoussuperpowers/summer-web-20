import React, { Component } from "react";

class Card extends Component{

    constructor() {
        super();
        this.state = {
          trueOrFalse: false,
        };
        this.currId = this.currId.bind(this);
      }
    
      currId() {
        this.setState({ trueOrFalse: !this.state.trueOrFalse });
        
      }
//when i click buttonfrom app.jsx or card from card.jsx Play/Pause button should update
    render(){
        return <div onClick={this.currId} >
        
        <div onClick={this.props.toggleState}>
        
        <div className={this.state.trueOrFalse ? "cardselected" : "card"}>
        
        <h3 className="song">{this.props.id}) {this.props.name}</h3>
        <h6 className="artist">Artist-{this.props.artist}</h6>
        {/* {this.state.trueOrFalse?this.props.name+" is being played":"Not being played currently"} */}
    <hr></hr>
    </div>
        </div>
        
           
        </div>
    }
}
export default Card;
