import React, { useState, useEffect } from "react";
import "./Signup.scss";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getHomeNews } from "../../store/news";
import { signup } from "../../store/Authentication";

const SignUp = () => {
  const navigate = useNavigate();
  // const [passwordMatch, setPasswordMatch] = useState(true); // State to track password match

  const dispatch = useDispatch();

  const schema = z.object({
    email: z.string().nonempty("Email is required").email("Email not valid"),
    password: z.string().nonempty("Password is required").min(6).max(20),
    name: z
      .string()
      .nonempty("Username is required")
    
  });

  

  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch, // Retrieve values from password and confirmPassword inputs
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
    resolver: zodResolver(schema),
  });

const onSubmit = (data) => {
  dispatch(signup(data,navigate ))
    console.log(data , "hello");
  };

  return (
    <div className="container h-screen flex justify-center items-center">
      <div className="page">
        <div className="cover">
          <div className="login-heading">
            <h1>SIGNUP</h1>
          </div>
          <div className="center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label>Email:</label>
                <input {...register("email")} />
                {errors.email && <span>{errors.email.message}</span>}
              </div>
              <div>
                <label>Password:</label>
                <input {...register("password")} />
                {errors.password && <span>{errors.password.message}</span>}
              </div>
              <div>
                <label>Name:</label>
                <input {...register("name")} />
                {errors.name && (
                  <span>{errors.name.message}</span>
                )}
                
              </div>
              <button type="submit" className=" text-green-400 ">Submit</button>
            </form>

            <div className="check-box" id="check-box">
              <div className="checkbox_main">
                <input
                  style={{ width: "20px" }}
                  type="checkbox"
                  className="agreeCheckbox"
                />
                <span className="texting">
                 &nbsp; I agree to the terms and conditions
                </span>
              </div>
            </div>

            <div className="signup-Account-btn" onClick={()=> navigate('/')}>You have an account? Login</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
