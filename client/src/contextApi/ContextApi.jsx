import { createContext,useState,useRef, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";
axios.defaults.baseURL="http://localhost:8000/api/";


export const contextApi=createContext();

 const ContextProvider=({children})=>{
  const navigation=useNavigate();
  const [errMsg,setErrMsg]=useState(null);
  const [user,setUser]=useState(null);
  const [token,setToken]=useState(null);
  const [students,setStudents]=useState(null);

    const getUserToken=()=>{
      let user=window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")):null;
      let token=window.localStorage.getItem("token");
      if(token){
        setUser(user);
        setToken(token);
      }
    }
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

          window.localStorage.setItem("token",res?.data.token);
          window.localStorage.setItem("user",JSON.stringify(res?.data.user));

          setFormDataRegister(initialFormDataRegister);
          navigation("/");
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

          window.localStorage.setItem("token",res?.data.token);
          window.localStorage.setItem("user",JSON.stringify(res?.data.user));
          
          setFormDataLogin(initialFormDataLogin);
          navigation("/");
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

      const addStudents=async(student)=>{
        try{
          const config={
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json',
                "Authorization":`Bearer ${token}`
            }
        } 
          const res=await axios.post("students",student,config);
          // setStudents(res.data?.students);  

          console.log(res)
          
          getStudents();
        }catch(err){
          setErrMsg(err.response?.data.errors);
        }  
      }

      
      
      console.log(errMsg)

    return <contextApi.Provider
     value={{user,token,students,getStudents,getUserToken,addStudents,
      handleSubmitRegister,formDataRegister,setFormDataRegister,
      handleSubmitLogin,formDataLogin,setFormDataLogin}}
     >{children}</contextApi.Provider>
}

export default ContextProvider;