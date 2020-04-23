  
import React, { Component } from "react";
import Card from "./Card";
import songs from "../songs";
import Head from "./Head"

class App extends Component{

    constructor() {
        super();
        this.state = {
          trueOrFalse: true,
        };
        
        this.toggleState = this.toggleState.bind(this);
      }
    
      toggleState() {
        this.setState({ trueOrFalse: !this.state.trueOrFalse });
     
      }
    
render(){
    return <div>
        <Head />
       {console.log(this)}
        <button className="myButton" onClick={this.toggleState}>{this.state.trueOrFalse ? "Play" : "Pause"}</button>
        {songs.map(
            (item,i)=> <Card {...item} key={i} toggleState={this.toggleState}/>
                 
                
         
        )
        }{console.log(this)}
        
        

        
        
        </div>

}

}
export default App;
