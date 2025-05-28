import React from 'react'
// external css file import here
import './App.css'

const App = () => {

  //  Internal css as an object 

  const mystyle  = {
    fontFamily:"cursive",
    textDecoration:"underline"
    
  }
  return (
    <>

    <section className='wrapper'>
      <div className="ch1">
        <h2 style={{fontFamily:"verdana", color:"#023e8a"}}>Best Offer</h2>
        <p style={mystyle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque fugiat <br /> assumenda possimus tempora quos itaque voluptatem, ratione incidunt cum architecto </p>
        <button>Shop Now</button>
      </div>
    </section>
    
    </>
  )
}

export default App