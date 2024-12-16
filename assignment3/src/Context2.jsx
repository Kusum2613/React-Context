import { createContext, useState } from "react";

export const Changer=createContext()
export const Provide=({children})=>{
    const[state,setState]=useState("red")
  return(
   <Changer.Provider value={{state,setState}}>
    {children}
   </Changer.Provider>
  )
}