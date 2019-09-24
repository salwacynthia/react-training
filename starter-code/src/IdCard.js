import React from 'react';
import './style.css'

function Idcard(props){
    return (
    <div className = "Idcard">
       <img src= {props.picture} alt= "person"/>  
    <div>
    <h3> First Name: {props.firstName} </h3>
    <h3> Last Name: {props.lastName} </h3>
    <h3> Gender: {props.gender}</h3> 
    <h3> Height: {props.height}</h3> 
    <h3>Birth: {props.birth.toDateString()} </h3>
         
    </div>  
  </div>
  )
}

export default Idcard;