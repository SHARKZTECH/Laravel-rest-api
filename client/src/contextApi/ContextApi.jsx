import { createContext,useState } from "react";
import axios from "axios";
axios.defaults.baseURL="";


export const contextApi=createContext();

 const ContextProvider=({children})=>{
    const name="sharkz reigns";

    return <contextApi.Provider value={{name}}>{children}</contextApi.Provider>
}

export default ContextProvider;