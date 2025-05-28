import React from 'react'

const Data1 = (props) => {
  return (
    <>
    <h1>Child-1 Component</h1>

    {/* display data which comes from parent component */}

    <h2 style={{color:"red"}}> My name - {props.name} </h2>
    </>
  )
}

export default Data1