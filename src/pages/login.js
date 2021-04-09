import React from "react";
import { useForm } from "react-hook-form";

function Login() {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors }
    } = useForm();
  
    const onSubmit = (data) => {
      alert(JSON.stringify(data));
    }; // your form submit function which will invoke after successful validation
  
    console.log(watch("example")); // you can watch individual input by pass the name of the input
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input
          {...register("Name", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i
          })}
        />
        {errors?.Name?.type === "required" && <p>This field is required</p>}
        {errors?.Name?.type === "maxLength" && (
          <p>Your name cannot exceed 20 characters</p>
        )}
        {errors?.Name?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
        <label>Password</label>
        <input type="password"
          {...register("password", {
            required: true,
            maxLength: 20,
            minLength: 8,
          })}
        />
        {errors?.password?.type === "required" && <p>This field is required</p>}
        {errors?.password?.type === "minLength" && (
          <p>Password must be at least 8 characters</p>
        )}
        {errors?.password?.type === "maxLength" && (
          <p>Password cannot exceed 20 characters</p>
        )}
        <input type="submit" />
      </form>
    );
  }

export default Login;