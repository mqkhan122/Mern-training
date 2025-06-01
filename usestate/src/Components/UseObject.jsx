import React, { useState } from 'react'

const UseObject = () => {
    let [person,setPerson] = useState({
        name:"Aditya",age:28,contact:12314,city:"Bhopal"
    })
    function Additem(){
        setPerson({...person,['email']:"mp@gmail.com"})
    }
  return (
    <>
     <h1>Person name is {person.name}</h1>
     <h2>Person age is {person.age}</h2>
     <h2>Person contact is {person.contact}</h2>
     <h2>Person city is {person.city}</h2>
     <h2>{person.email}</h2>

     <button onClick={Additem}>Add Email</button>
    </>
  )
}

export default UseObject