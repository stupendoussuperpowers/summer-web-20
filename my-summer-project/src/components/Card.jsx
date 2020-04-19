import React from "react";


function Card(props){

   


return <button  className="card">

<h1 className="song">{props.id}) {props.name}</h1>
<h3 className="artist">{props.artist}</h3>
</button>
}

export default Card;