import React ,{useState}from "react";
import Play from "./images/play.jpg";
import Pause from "./images/pause.jpg"

function Card(props){

   const [value,setValue]=useState(false)
   

   function playClicked(){
       setValue(true);
       
   }
   function pauseClicked(){
    setValue(false);
    
}

 


return <div className="card">

<h1 className="song">{props.id}) {props.name}</h1>
<h3 className="artist">Artist-{props.artist}</h3>

<button onClick ={playClicked}  className={(value===true) ? "play" :"pause"}>
<img  src={Play} alt="Play"></img>
</button>

<button onClick ={pauseClicked} className={(value===false) ? "play" :"pause"}>
<img  src={Pause} alt="Pause"></img>
</button>

</div>
}

export default Card;