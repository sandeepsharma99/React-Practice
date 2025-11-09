import React from 'react'
import { useState } from 'react'

const Card = ({image,price,title}) => {

    const [clicked,setClicked] = useState(false)
    const [count, setCount] = useState(1)

     const handleClick = () => {
    setClicked(!clicked);
    };
  return (
    <>

    <div className="card bg-base-100 w-96 shadow-sm">
  
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl" />

  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{price}</p>
    <div className="card-actions">
      {clicked ? (
              <div className="flex items-center gap-2">
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => setCount(count + 1)}
                >
                  ➕
                </button>
                <p>{count}</p>
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() => setCount(count > 1 ? count - 1 : 1)}
                >
                  ➖
                </button>
              </div>
            ) : (
              <button className="btn btn-primary" onClick={handleClick}>
                Buy Now
              </button>
            )}
      

    </div>
  </div>
</div>


    </>
  )
}

export default Card
