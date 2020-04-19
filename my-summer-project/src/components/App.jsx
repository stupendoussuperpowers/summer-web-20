import React from "react";
import Card from "./Card";
import songs from "../songs";
import Head from "./Head"

var userHasClicked=false;

function createCard(item)
{
    return <Card 
    isClicked={userHasClicked}
    id={item.id}
    name={item.name}
    artist={item.artist}
    />
}

function App(){
return <div>
<Head />
{songs.map(createCard)}
</div>


}
export default App;