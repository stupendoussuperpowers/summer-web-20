import React, { Component } from "react";
import Card from "./Card";
import songs from "../songs";
import Head from "./Head"
class App extends Component{
render(){
    return <div>
        <Head />
        {songs.map(
            function(item,i){
                return <Card {...item} key={i}/>
         }
        )
        }
        </div>

}

}
export default App;