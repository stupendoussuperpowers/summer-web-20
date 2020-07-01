import React, {Component, useContext} from 'react'
import globalContext from '../Components/GlobalContext'


/*class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            context: useContext(globalContext),
            pokeNames: this.state.context.pokeNames,
            pokeDetails: this.state.context.pokeDetails
        };
    }
    
    render(){
    return(
    <div id="header">
        {console.log(this.state.context)}
        this.state.pokeName.length && <div >
        <img className="headImage" src={this.props.front} alt={this.props.name}/>
        </div>
        <div id="content">
            <h1>Name:{this.props.name}</h1>
            <h3>
            Base experience: {this.props.baseExperience} <br/>
            Ability: {this.props.ability}<br/>
            Moves: {this.props.move1},  {this.props.move2},  {this.props.move3}
            </h3>
        </div>
        <div >
        <img className="headImage" src={this.props.back} alt={this.props.name}/>
        </div>
    </div>
    )
    }
}*/

const Header = () => {
    const context= useContext(globalContext);
    console.log(context.fetched);
    return(
     context.fetched&&<div id="header">
        <div >
        <img className="headImage" src={context.pokeDetails[0].sprites.front_default} alt={context.pokeName[0]}/>
        </div>
        <div id="content">
            <h1>Name:{context.pokeName[0]}</h1>
            <h3>
            Base experience: {context.pokeDetails[0].abilities.baseExperience} <br/>
            Ability: {context.pokeDetails[0].abilities[0].ability}<br/>
            Moves: {context.pokeDetails[0].move1},  {context.pokeDetails[0].move2},  {context.pokeDetails[0].move3}
            </h3>
        </div>
        
    </div>
    )
}

export default Header 