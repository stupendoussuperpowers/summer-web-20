import React, { Component, useContext } from 'react';
import GlobalContext from '../Components/GlobalContext';

/*class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            context: useContext(GlobalContext),
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
	const context = useContext(GlobalContext);
	console.log(context);
	return context.fetched ? (
		<div id='header'>
			<div>
				<img
					className='headImage'
					src={context.pokeDetails[0].sprites.front_default}
					alt={context.pokeName[0]}
				/>
			</div>
			<div id='content'>
				<h1>Name:{context.pokeName[0]}</h1>
				<h3>
					Base experience: {context.pokeDetails[0].abilities.baseExperience} <br />
					Ability: {context.pokeDetails[0].abilities[0].ability.name}
					<br />
					Moves: {context.pokeDetails[0].moves[1].move.name},{' '}
					{context.pokeDetails[0].moves[2].move.name},{' '}
					{context.pokeDetails[0].moves[3].move.name}
				</h3>
			</div>
		</div>
	) : (
		<div>Please wait while we are loading poke </div>
	);
};

export default Header;
