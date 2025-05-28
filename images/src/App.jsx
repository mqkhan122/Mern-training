import React from 'react'
import img1 from './assets/image2.jpeg'

const App = () => {
  return (
    <>
    
     {/* here i am using image which is available in public folder */}
    <h2>This image comes from public folder</h2>
     <img src="image1.jpeg" height={"200px"} alt="" /> <br />
     

    <h2>This image import from src folder and use as a varible </h2>
    <img src={img1} height={"200px"} alt="" /> <br />

    </>
  )
}

export default App