import React, { Component } from 'react';
import Head from './Head';
import Current from './Current';
import List from './List';
import songs from '../song';

class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Nothing played"
        }
    }
    
    render() {
        return (
        <div>
            <Head/>
            <div className="middle">
            <List name={songs[0].name}
            artist={songs[0].artist} 
                whenClicked={()=>this.setState({
                    message:"Song1 selected is being played"
                })}/>
            <List name={songs[1].name} 
            artist={songs[1].artist}
                whenClicked={()=>this.setState({
                    message:"Song2 selected is being played"
                })}/>
            <List name={songs[2].name} 
            artist={songs[2].artist}
                whenClicked={()=>this.setState({
                    message:"Song3 selected is being played"
                })}/>
            <List name={songs[3].name} 
            artist={songs[3].artist}
                whenClicked={()=>this.setState({
                    message:"Song4 selected is being played"
                })}/>              
            
            </div>
            
            <Current name={this.state.message}/>
  </div>
        )
    }
}
export default App;