import React ,{useState}from "react";


function Card(props){

   const [value,setValue]=useState(null)
   

   function playClicked(){
       setValue(true);
       
   }
   function pauseClicked(){
    setValue(false);
    
}

 


return <div className="card">

<h1 className="song">{props.id}) {props.name}</h1>
<h3 className="artist">{props.artist}</h3>
<button onClick ={playClicked} 

className={(value===true) ? "cardclicked" :"card"}>
Play
</button>
<button onClick ={pauseClicked} 

className={(value===false) ? "cardclicked" :"card"}>
Pause
</button>
</div>
}

export default Card;