import React from 'react'

function rgbToHex(value) {
    if (value < 16) return '0'+ value.toString(16)
    else return value.toString(16)
  }


export default function Boxcolor({r,g,b}){
    let HexColor = "#" + rgbToHex(r)+ rgbToHex(g)+ rgbToHex(b)
let boxStyle = {
    backgroundColor: `rgb(${r},${g},${b})`,
    height: "150px",
    width: "600px",
    display: "flex",
    justifyContent:"center",
    alignItself:"center",
    justifyItself:"center",
    border: "1px solid black",
    margin: "10px"

}
return (

    <div className = "Boxcolor" style = {boxStyle}>
        rgb({r},{g},{b}) <br/>
        {HexColor}
    </div>
)  
}