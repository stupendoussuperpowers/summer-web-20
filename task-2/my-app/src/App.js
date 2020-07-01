import React, {Component} from 'react';
import './App.css';
import globalContext, {GlobalProvider} from './Components/GlobalContext'
import Header from './Components/Header';
import NavBar from './Components/NavBar';


class App extends Component{
  render(){
    return(
     <GlobalProvider>
       <Header/>
       <NavBar></NavBar>
     </GlobalProvider>
    )
  }
}



export default App;
