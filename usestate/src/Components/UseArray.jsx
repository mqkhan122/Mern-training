import React, { useState } from 'react'

const UseArray = () => {
    let [ar,setar] = useState(["Qasim",27,"bhopal",12345])
  return (
    <>
    
    <table border="">
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Contact</th>
        </tr>
        {/* key attribute take care of which element has been change or modify */}
        <tr>
            {
                ar.map((e,index)=>(
                    <td key={index}>{e}</td>
                ))
            }
        </tr>
    </table>
    
    </>
  )
}

export default UseArray