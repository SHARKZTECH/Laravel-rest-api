import { createContext,useState,useRef } from "react";
import axios from "axios";
axios.defaults.baseURL="";


export const contextApi=createContext();

 const ContextProvider=({children})=>{

    //Register Form
    const initialFormData = {
        username: '',
        email: '',
        password: '',
        repeatPassword: '',
      };    
      const formDataRef = useRef(initialFormData);    
      const [formData, setFormData] = useState(initialFormData);
    
      const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [id]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();    
        // Access the input values from the formData object
        const { username, email, password, repeatPassword } = formData;
    
        // Now you can use these variables or update the context with them if needed
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Repeat Password:', repeatPassword);
    
        // Perform any other actions you need on form submission
    
        // Step 4: Clear the input fields after form submission
        setFormData(initialFormData);
      };


    return <contextApi.Provider value={{handleInputChange,handleSubmit,formData}}>{children}</contextApi.Provider>
}

export default ContextProvider;