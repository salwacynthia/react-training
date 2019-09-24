import React from 'react'

function Random({min,max}) {
  let random = Math.floor(Math.random()*max)+min;
  return (
    <div className="Random">
      Random value between {min} and {max} => {random}
    </div>
  )
}

export default Random;