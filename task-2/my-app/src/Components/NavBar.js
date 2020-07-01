import React, {Component} from 'react'

class NavBar extends Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
            <div id="navBar">
                <div className="navText">
                    Full PokeList
                </div>
                <div className="navText">
                    Pokedecks
                </div>
            </div>
        )
    }
}
export default NavBar