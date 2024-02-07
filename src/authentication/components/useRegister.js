import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from "axios";

export const StateRegister = () => {
  
    const state = {
      username:'',
      email: '',
      password: '',
      passwordConfirm:''
    };
  
    const [stateRegister, setStateRegister] = useState(state);
  
    const handleChange = (event) => {
      setStateRegister({
        ...stateRegister,
        [event.target.name]: event.target.value,
      });
    };
  

  
    const handleSubmit = async (e) => {
      e.preventDefault();

      const password = stateRegister.password;
      const confirmPassword = stateRegister.passwordConfirm;

  if (password !== confirmPassword) {
    
    return toast.error('Passwords do not match')
  }
      axios.post('http://localhost:4000/auth/register',stateRegister)
      .then((response) => {
        toast.success(response.data.message);
        return window.location.href="http://localhost:3000/authentication/login"
      })
      .catch((error) => {
        return toast.error(error.response.data.message[0]);
      });
      
    };
  
    return { stateRegister, handleChange, handleSubmit };

}