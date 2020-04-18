import React, {Component} from 'react'


class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            toggle: true
        };
    }
    Toggle(){
        this.setState((state)=>({
            toggle: !this.state.toggle
        }));
    }
    render(){
    return(
    <div id="header">
        <div id="image">
        <img src={this.props.link} alt={this.props.name}/>
        </div>
        <div id="content">
        <p className="thin">Now playing</p>
            <h1>{this.props.name}</h1>
            <h4>By {this.props.author}</h4>
            <button onClick={()=>this.Toggle()}>{this.state.toggle ? 'Pause' : 'Play'}</button>
        </div>
    </div>
    )
    }
}

export default Header 