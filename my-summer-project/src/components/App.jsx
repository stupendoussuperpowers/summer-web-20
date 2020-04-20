import React from "react";
import Card from "./Card";
import songs from "../songs";
import Head from "./Head"



function createCard(item)
{
    return <Card 
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