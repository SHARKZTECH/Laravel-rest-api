import { createContext,useState,useRef } from "react";
import axios from "axios";
axios.defaults.baseURL="http://localhost:8000/api/";


export const contextApi=createContext();

 const ContextProvider=({children})=>{
  const [errMsg,setErrMsg]=useState(null);
  const [user,setUser]=useState(null);
  const [token,setToken]=useState("4|UEzJkXq0ID2Jomils8vBmqEmCX3MV7WTWcamcQkn");
  const [students,setStudents]=useState(null);

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
         
          setToken(res?.data.token);
          setUser(res?.data.user);

          setFormDataRegister(initialFormDataRegister);
        }catch(err){
          setErrMsg(err.response?.data.errors);
        }    
    
      };

      //Login Form
      const initialFormDataLogin = {
        email: '',
        password: '',
      };    
      const [formDataLogin, setFormDataLogin] = useState(initialFormDataLogin);

      const handleSubmitLogin = async(e) => {
        e.preventDefault();
            try{
          const res=await axios.post("login",formDataLogin);
          console.log(res.data)
          
          setToken(res?.data.token);
          setUser(res?.data.user);

          
          setFormDataLogin(initialFormDataLogin);
        }catch(err){
          setErrMsg(err.response?.data.errors);
        }  
        
      };

      //Get All Students
      const getStudents=async()=>{
        try{
          const res=await axios.get("students");
          setStudents(res.data?.students);  
          
        }catch(err){
          setErrMsg(err.response?.data.errors);
        }  
      }

      
      
      console.log(errMsg)

    return <contextApi.Provider
     value={{user,token,students,getStudents,
      handleSubmitRegister,formDataRegister,setFormDataRegister,
      handleSubmitLogin,formDataLogin,setFormDataLogin}}
     >{children}</contextApi.Provider>
}

export default ContextProvider;