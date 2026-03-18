import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from 'yup';
import { login } from "../features/userSlice";
function Login(){

    let dispatch=useDispatch();
    let loginForm=useFormik({
        initialValues:{
            username:"",
            password:"",
        },
        onSubmit:(details)=>{
            console.log("Login details",details)
            dispatch(login(details))
        }
    })

    return (
        <>
        <h1>Login Form</h1>
        <form onSubmit={loginForm.handleSubmit}>
            <input type="text" {...loginForm.getFieldProps("username")} placeholder="Enter Username" />
            <br />
            <input type="password" {...loginForm.getFieldProps("password")} placeholder="Enter Password"/>
            <br />
            <button type="submit">Login</button>
        </form>
        </>
    )
}
export default Login;