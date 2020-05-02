import React, { Component } from 'react'
import './style.css'

class mybutton extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          text:"P A U S E",
          presentstate:false
     }
 }
 buttonhandler=()=>{
     console.log(this.presentstate)
     if(!this.state.presentstate)
     {
        this.setState({
            text:"P L A Y",
            presentstate:true
        })
     }
     else
     {
        this.setState({
            text:"P A U S E",
            presentstate:false
        })
     }
       
 }
    render() {
        return (
            <div>
                <button className="button" onClick={this.buttonhandler}>{this.state.text}</button>      
            </div>
        )
    }
}

export default mybutton
