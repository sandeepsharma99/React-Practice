import React from 'react'

const App = () => {

  fetch()
  clickHandle()

  return (
    <>
      <label htmlFor="">from</label>
      <input type="text" />
      <label htmlFor="">to</label>
      <input type="text" />
      <label htmlFor="">date</label>
      <input type="date" />
      <button onClick={clickHandle}>search</button>
    </>
  )
}

export default App  
