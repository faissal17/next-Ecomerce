import {  useState } from 'react';

import { toast } from 'react-toastify';
import axios from "axios";

export const StateLogin = () => {
  
    const state = {
      email: '',
      password: '',
    };
  
    const [statelogin, setStateLogin] = useState(state);
  
    const handleChange = (event) => {
      setStateLogin({
        ...statelogin,
        [event.target.name]: event.target.value,
      });
    };
  

  
    const handleSubmit = async (e) => {
      e.preventDefault();
      axios.post('http://localhost:4000/auth/login',statelogin)
      .then((response) => {
        toast.success(response.data.message);
        return window.location.href="http://localhost:3000/dashboard";
      })
      .catch((error) => {
        if (typeof(error.response.data.message) === 'string' ) {
           return toast.error(error.response.data.message);
        }

        if (typeof(error.response.data.message) === 'object' ) {
          return toast.error(error.response.data.message[0]);
       }
       
      });
      
    };
  
    return { statelogin, handleChange, handleSubmit };

}