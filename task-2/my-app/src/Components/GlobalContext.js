import React, { createContext, useReducer, useEffect, useState } from 'react';

const GlobalState = {
	pokeName: [],
	pokeDetails: [],
	mounted: false,
};

/*export function header(){
  const [state, setState] = useState([{
    pokeName: [],
    pokeDetails: [],
    mounted: false
  }])
}*/
const GlobalContext = createContext(GlobalState);
export default GlobalContext;
/*class PokeAPI extends Component {
    constructor(){
      super()
      this.state={ 
        pokeName: [],
        pokeURLs: [],
        pokeDetails: [],
        mounted: false,
        i : 0,
        index: 0 
      }
    }
    componentDidMount(){
      fetch('https://pokeapi.co/api/v2/pokemon?limit=7').then
      (res =>res.json()).then(
          response => {response.results.map((p, i) => 
          {p.name=p.name.toString();
           p.name= p.name.charAt(0).toUpperCase() + p.name.substr(1).toLowerCase();
           this.state.pokeName.push(p.name);
           fetch(p.url).then(data=>data.json())
           .then(result => (this.setState(previousState=>({
             pokeDetails: [...previousState.pokeDetails, result]
           }))))
          }
        )}
      )
      }
  render() {
      return(
      /*<div>
        {
        this.state.pokeDetails.length &&<Header name={this.state.pokeName[this.state.i]}
        front={this.state.pokeDetails[this.state.i].sprites.front_default}
        back={this.state.pokeDetails[this.state.i].sprites.back_default}
        baseExperience={this.state.pokeDetails[this.state.i].base_experience}
        ability={this.state.pokeDetails[this.state.i].abilities[0].ability.name}
        move1={this.state.pokeDetails[this.state.i].moves[0].move.name}
        move2={this.state.pokeDetails[this.state.i].moves[1].move.name}
        move3={this.state.pokeDetails[this.state.i].moves[2].move.name}/>
        }
        <div id="pokelist">
          {
          this.state.pokeDetails.map((item, index)=>(
            
            index !== this.state.i ?  <div className='pokemon'>
                      <br/>
                      <img className="pokeIm" src={this.state.pokeDetails[index].sprites.front_default}/>
                      <b>
                      {this.state.pokeName[index]}                    
                     </b>
                      </div>
              : console.log()
            
          ))
          }
        </div>
     <div></div>
      
      ) 
    }
}*/
const AppReducer = (state, action) => {
	switch (action.type) {
		case 'SET_FETCHED':
			console.log(action);
			return {
				...state,
				fetched: action.payload,
			};
		default:
			return state;
	}
};
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, { GlobalState, fetched: false });
	useEffect(() => {
		if (!GlobalState.fetched) {
			fetch('https://pokeapi.co/api/v2/pokemon?limit=7')
				.then((res) => res.json())
				.then((response) => {
					response.results.map((p, i) => {
						p.name = p.name.toString();
						p.name = p.name.charAt(0).toUpperCase() + p.name.substr(1).toLowerCase();
						GlobalState.pokeName.push(p.name);
						fetch(p.url)
							.then((data) => data.json())
							.then((result) => {
								GlobalState.pokeDetails.push(result);
								dispatch({
									type: 'SET_FETCHED',
									payload: true,
								});
							});
					});
				});
		}
	}, []);
	console.log(state);
	return (
		<GlobalContext.Provider
			value={{
				pokeName: state.GlobalState.pokeName,
				pokeDetails: state.GlobalState.pokeDetails,
				fetched: state.fetched,
			}}>
			{children}
		</GlobalContext.Provider>
	);
};
