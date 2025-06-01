import React, { useState } from 'react'

const UseState = () => {
    let [count,setCount] = useState(0)
    
  return (

    <>
   
      <h1>UseState Counter</h1>

      <h1>{count}</h1>
      {/* decrement not less then 0 */}
      <button onClick={()=>setCount(count!=0?count-1:0)}> - </button>   
      <button onClick={()=>setCount(count+1)}> + </button>


      
    </>
  )
}

export default UseState