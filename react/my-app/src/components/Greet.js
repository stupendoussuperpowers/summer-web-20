import React from 'react'

// function Greet(){
//     return <h1>Hello Ishan!</h1>
// }

 const Greet = (props) =>{
     console.log(props)
 return <h1>Hellos {props.name}!</h1>
 }

export default Greet;