import React,{useContext} from 'react';
import { useFormik } from "formik";
import {useHistory } from "react-router-dom";
import "./sign.css";
import { RootContext } from "../../RootContext";

const SignIn =()=>{
    const history = useHistory();

    const { currentUser,
        setCurrentUser,
        authToken,
        setAuthToken } = useContext(RootContext)
    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        onSubmit:({email,password})=>{
            if(email !== '' && password !== '') {
                 setCurrentUser({
                    email,
                    password
                 });
                 setAuthToken('123455')
                history.push('/');
            }
        }
    }) 
    

    
    if(authToken) {
      history.push('/')
  }

    return(
        <form onSubmit={formik.handleSubmit}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input name="email" type="email" value={formik.values.email} onChange={formik.handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input name="password" type="password" onChange={formik.handleChange} value={formik.values.password} class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div class="form-check">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>)
};
export default SignIn;