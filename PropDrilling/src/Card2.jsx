import React from 'react'
import Card3 from './Card3'

const Card2 = (props) => {
  return (
    <div>
      <Card3 tata={props.count} increase={props.increase}/>
    </div>
  )
}

export default Card2
