import React, {Component} from 'react'

class Pokelist extends Component{
    render(){
        return(
            <div className="pokemon">
                <b> {this.props.name}</b>
                <br/>
                <br/>
            </div>
            
        )
    }
}

export default Pokelist