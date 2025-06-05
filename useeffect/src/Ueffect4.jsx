import React, { useEffect, useState } from 'react'

// useEffect with fetch component

const Ueffect4 = () => {
    let [apidata,setApidata] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>res.json())
        .then((data)=>setApidata(data))
    },[])

   
    
  return (
    <>
    
    {/* {apidata} */}

    <table border="">
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
        </tr>

        {
            apidata.map((e)=>(
                <tr>
                  <td> {e.id} </td>
                  <td> {e.title} </td>
                  <td> {e.body} </td>

                </tr>
            ))
        }
    </table>
     
    
    </>
  )
}

export default Ueffect4