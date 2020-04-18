import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header'
import Playlist from './Components/Playlist'


class App extends Component{
  render(){
    return(
     <div>
       <Header link='https://upload.wikimedia.org/wikipedia/en/9/98/Linkin_Park_Burn_It_Down.jpg'
                name="Burn It Down"
                author='Linkin Park'/>
      <Playlist />
     </div>
    )
  }
}



export default App;
