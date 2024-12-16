import React, { useContext } from 'react'
import { Changer } from './Context2'

function Button2() {
    const {state,setState}=useContext(Changer)
  return (
    <div>
        <h1 style={{backgroundColor:state}}>Hii buddy</h1>
        <button onClick={()=>setState("red")}>Red</button>
        <button onClick={()=>setState("green")}>Green</button>
        <button onClick={()=>setState("yellow")}>Yellow</button>
        <button onClick={()=>setState("pink")}>Pink</button>
    </div>
  )
}

export default Button2