import React, { useEffect, useState } from 'react'

const Ueffect3 = () => {
    let [count,setCount] = useState(0)

    // useEffect with dependency

    useEffect(()=>{console.log("third working")},[count])
  return (
    <>
    <h1> {count} </h1>
    <button onClick={()=>setCount(count+1)}>inc</button>
    <button onClick={()=>setCount(count-1)}>decx</button>
    
    </>
  )
}

export default Ueffect3