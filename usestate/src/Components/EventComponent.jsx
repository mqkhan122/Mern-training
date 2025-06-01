import React from 'react'

const EventComponent = () => {
    function click(){
        alert("Working")
    }
  return (
    <>
    
     <button onClick={click}>On Click</button>
     <button onDoubleClick={click}>On Double Click</button>
     <button onContextMenu={click}>Right Click</button>
     <button onMouseEnter={click}>Mouse Enter</button>
     <button onMouseLeave={click}>Mouse Leave</button>
    
    </>
  )
}

export default EventComponent