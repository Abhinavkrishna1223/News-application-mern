import React, { useState, useEffect } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const navigate = useNavigate();

  const schema = z.object({
    email: z.string().nonempty("Email is required").email("Email not valid"),
    password: z.string().nonempty("Password is required").min(6).max(20),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch, // Retrieve values from password and confirmPassword inputs
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const passwordValue = watch("password");



  const onSubmit = (data) => {
    console.log(data + "hello");
  };

  return (
    <div class="container">
      <div class="page">
        <div class="cover">
          <div class="login-heading">
            <h1>LOGIN</h1>
            <h4>Welcome Back !</h4>
          </div>
          <div class="center">
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

              <div class="forgot-btn">Forgot password?</div>

              <button class="login-btn" onClick={handleSubmit}>
                Submit
              </button>
            </form>

            <div
              class="login-Account-btn"
              onClick={() => navigate("/signUp")}
            >
              Do'nt have an account ? SignUp
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;








