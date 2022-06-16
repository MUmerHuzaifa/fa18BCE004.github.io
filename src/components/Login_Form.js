import {Formik, useFormik} from 'formik';
import React, { useState } from 'react';
import {addSignupData,addLogin}  from '../services/api'
import {Link} from 'react-router-dom';
import "./H_style.css";
function Login_Form() {

    
        const addDetails = async (e,obj) => {
           
         await addLogin(obj);
       }}


    const formik = useFormik({
        initialValues: {
            name: '',
            password: '',
        },
        
        validate: values => {
            let errors = {
            }
            if(!values.name){
                errors.name = "*Required"
            }else if(!/^[a-zA-Z][a-zA-Z\\s]+$/.test(values.name)){
                errors.name = "*Must be Alphabetic"
            }
            
            if(!values.password){
                errors.password = "*Required"
            }else if(!/^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$/.test(values.password)){
                errors.password = "*Minimum eight characters,one uppercase,one lower case,one digit"
            }
            return errors
        }
    });
   
  return (
      <div className='signupform' id='login-form-parent'>
            <div className="Forms shadow">
        <h1 className='text-center' style={{color:"white",padding:"20px"}}> Welcome to Login Section</h1>
        <form onSubmit={formik.handleSubmit}  className="form-popup p-3"  style={{ height: "300px", width: "600px", background: "transparent", borderRadius: "10px", marginLeft:"70px" }} >

        <div className="form-control" id="login-form-child" style={{backgroundColor:"rgba(255, 255, 255, 0.334)"}}>
        <input type="text" id="name" name="name" id='txt'  onChange={formik.handleChange}
                value={formik.values.name}  placeholder='Enter Username'style={{width:"300px"}}/>
                {formik.errors.name? <div style={{color: "red"}}>{formik.errors.name}</div>: null}
            </div>
            <div className="form-control" id="login-form-child" style={{backgroundColor:"rgba(255, 255, 255, 0.334)"}}>
                <input type="password" id="password" name="password" id='txt'  onChange={formik.handleChange}
                value={formik.values.password}  placeholder='Enter password'style={{width:"300px"}}/>
                {formik.errors.password? <div style={{color: "red"}}>{formik.errors.password}</div>: null}
            </div>
           
            <button id="button1" className="btn btn-primary" style={{marginLeft:"450px", width:"100px",marginBottom:"10px"}} 
             onClick={(e) => addDetails(e,formik.values)}
            >Login</button>

      
            
        </form>
    </div>
      </div>

  )
}

export default Login_Form;