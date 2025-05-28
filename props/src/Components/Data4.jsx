import React from 'react'
// here we recive array as an object 
const Data4 = ({student}) => {
  return (
    <>
     <h1>Child-4 Component</h1>
     {/* instead of index value we also use map method here */}
     <h2 style={{color:"red"}}> Student name {student[0]} Student age {student[1]} Student city {student[2]}</h2>
    
    </>
  )
}

export default Data4