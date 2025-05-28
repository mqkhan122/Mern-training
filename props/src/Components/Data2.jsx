import React from 'react'
// we recive the props as parameter and also we destructure as parameter 
const Data2 = ({fname,lname,age}) => {
  return (
    <>
     <h1>Child-2 Component</h1>
     <h2 style={{color:"red"}}>My first name is - {fname} and Last name is - {lname} and my age -{age}</h2>
    </>
  )
}

export default Data2