import React from 'react'

const Data3 = (props) => {
    // destructure the object
    let {name,city,contact} = props.person
  return (
    <>
     <h1>Child-3 Component</h1>
      <h2 style={{color:"red"}}>Person name {name} Person city {city} Person contact {contact}</h2>
    </>
  )
}

export default Data3