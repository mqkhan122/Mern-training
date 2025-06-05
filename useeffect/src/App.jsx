import React from 'react'
import Ueffct1 from './Ueffct1'
import Ueffect2 from './Ueffect2'
import Ueffect3 from './Ueffect3'
import Ueffect4 from './Ueffect4'

const App = () => {
  return (
    <>
    {/* this is also example of useEffect with multiple components */}
    
        {/* // useEffect without any dependency */}

        <Ueffct1 />

        {/* useEffect with empty depenedency */}

        <Ueffect2 />

        {/* useEffect with dependency */}

        <Ueffect3 />
 
        {/* useEffect with fetch component */}

        <Ueffect4 />
    </>
  )
}

export default App