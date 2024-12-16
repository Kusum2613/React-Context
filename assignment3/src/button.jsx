import React from 'react'
import { CounterContext } from "./Contex";
import {useContext} from 'react'

function Button() {
    const { count, setCount } = useContext(CounterContext); // Consume context values
  return (
    <div>

<h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>++</button>
      <button onClick={() => setCount(count - 1)}>--</button>
    </div>
  )
}

export default Button