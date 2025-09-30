import React from 'react'

const Card3 = (props) => {
  console.log(props)
  
  return (
    <div>
      <h1>Count : {props.tata}</h1>
      <button onClick={props.increase}>increament</button>
    </div>
  )
}

export default Card3
