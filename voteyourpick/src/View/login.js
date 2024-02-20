import React, { useState , useContext } from "react";
import logo from "../Assets/logo.svg";
import { UserContext } from '../UserContext';
import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form';

const Login = () => {
  const navigate = useNavigate()
  const { login } = useContext(UserContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission here
    if(data.email=='admin' && data.password == 'password'){
      var user_data = { username: 'Admin', role: 'Organizer' }
      login(user_data);
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem('userData',JSON.stringify(user_data))
      navigate('/event');
    } else {
      alert('Please enter correct details')
    }
  };
  
  
  return (
    <div className="container mx-auto h-screen ">
      <div className="grid md:grid-cols-2 gap-4 md:h-full md:content-center px-4 mt-[100px]">
        <section className="h-full flex flex-col md:flex-row justify-center">
          <img alt="logo" src={logo} className="w-[240px]"  />
        </section>
        <section>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:w-[400px]">
            <h2 className="text-3xl">Login</h2>
              <input
                type="text"
                id="email"
                className="block w-full mt-5 px-2 py-1 border rounded"
                placeholder="Username"
                {...register("email", { required: true })}
              />
              {errors.email && <p>Email is required.</p>}
            
              <input
                type="password"
                id="password"
                className="block w-full mt-5 px-2 py-1 border rounded"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              {errors.password && <p>Password is required.</p>}
            </div>

            <button type="submit" className="mt-5 w-full px-4 py-2 bg-blue-950 text-white rounded md:w-auto">Submit</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
