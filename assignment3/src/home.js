import React, { useContext } from 'react'
import { Biocontext } from './index.jsx'

function Home() {
  const {myName,myAge}= useContext(Biocontext)
  return (
   <h1>HELLO DEAR {myName} and age{myAge}</h1>
  )
}

export default Home