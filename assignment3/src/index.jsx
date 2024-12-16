import { createContext } from "react";
export   const Biocontext=createContext()
export const BioProvider=({children})=>{
    const myName="Vinode"
    const myAge="20"
    return <Biocontext.Provider value={{myName,myAge}}>
        {children}
    </Biocontext.Provider>
}