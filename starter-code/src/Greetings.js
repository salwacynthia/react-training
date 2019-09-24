import React from 'react'

function Greetings(props) {
    console.log(props);
    let greetings = 'Hello'
    if (props.lang === 'fr') greetings = "Bonjour"
    if (props.lang === 'de') greetings = "Hallo"
   
    return (
      <div className="Greetings">
        {greetings} {props.children}
      </div>
    )
  }
  
  export default Greetings