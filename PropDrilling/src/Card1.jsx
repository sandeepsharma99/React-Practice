import React from 'react'
import Card2 from './Card2'

const Card1 = (props) => {
  
  return (
    <div>
      <Card2 tata={props.count} increase={props.increase}/>
    </div>
  )
}

export default Card1
