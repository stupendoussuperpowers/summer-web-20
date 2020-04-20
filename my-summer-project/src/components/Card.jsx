import React ,{useState}from "react";


function Card(props){

   const [value,setValue]=useState(false)
   

   function isClicked(){
       setValue(true);
       
   }
   function isdoubleClicked(){
    setValue(false);
    
}
   


return <button  onClick ={isClicked} 
onDoubleClick={isdoubleClicked}
className={(value===true) ? "cardclicked" :"card"}>

<h1 className="song">{props.id}) {props.name}</h1>
<h3 className="artist">{props.artist}</h3>

</button>
}

export default Card;