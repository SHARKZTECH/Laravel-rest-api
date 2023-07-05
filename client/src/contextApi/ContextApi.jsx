import { createContext,useState,useRef } from "react";
import axios from "axios";
axios.defaults.baseURL="http://localhost:8000/api/";


export const contextApi=createContext();

 const ContextProvider=({children})=>{
  const [errMsg,setErrMsg]=useState(null);
  const [user,setUser]=useState(null);
  const [token,setToken]=useState("4|UEzJkXq0ID2Jomils8vBmqEmCX3MV7WTWcamcQkn");

    //Register Form
    const initialFormDataRegister = {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      };    
      const [formDataRegister, setFormDataRegister] = useState(initialFormDataRegister); 
    
      const handleSubmitRegister = async (e) => {
        e.preventDefault();    
       
        try{
          const res=await axios.post("register",formDataRegister);
          
          setToken(res.data.data.token);
          setUser(res.data.data.user);

          setFormDataRegister(initialFormDataRegister);
        }catch(err){
          setErrMsg(err.response.data.errors);
        }    
    
      };

      //Login Form

      console.log(errMsg)


    return <contextApi.Provider value={{handleSubmitRegister,formDataRegister,setFormDataRegister}}>{children}</contextApi.Provider>
}

export default ContextProvider;