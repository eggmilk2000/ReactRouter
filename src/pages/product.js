import React from "react";
import { useForm } from "react-hook-form";

function Product() {
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
          <label>Product ID</label>
        <input {...register("age", { required: true, pattern: /^[0-9]+$/i})} />
        {errors?.age?.type === "pattern" && (<p>Number only</p>)}
        {errors?.Name?.type === "required" && <p>This field is required</p>}
        <label>Product name</label>
        <input
          {...register("Name", {
            required: true,
            maxLength: 20,
          })}
        />
        {errors?.Name?.type === "required" && <p>This field is required</p>}
        {errors?.Name?.type === "maxLength" && (
          <p>Product name cannot exceed 20 characters</p>
        )}
        <label>Description</label>
        <input{...register("description")}/>
        <input type="submit" />
      </form>
    );
  }

export default Product; 