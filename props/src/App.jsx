import React from 'react'
import Data1 from './Components/Data1'
import Data2 from './Components/Data2'
import Data3 from './Components/Data3'
import Data4 from './Components/Data4'

const App = () => {

  let person = {
    name:"Magladon",
    city:"Bhopal",
    contact:123414
  }

  return (
    <>
      <h1 align="center"> Props  </h1>

      {/* props as a single value */}

      <Data1 name="Qasim" />

      {/* props as a mul *tiple values */}

      <Data2 fname="Md Qasim" lname="Khan" age={27}/>

      {/* props as an object */}

      <Data3 person={person} />

      {/* props as an Array */}

       <Data4 student={["Anil",15,"indore"]} />
      
    </>
  )
}

export default App