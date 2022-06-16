import {useFormik} from 'formik';
import React, { useState } from 'react';
import {addSignupData,addLogin}  from '../services/api'

import {Link} from 'react-router-dom';
import "./H_style.css";
import { isTrivialHref } from '@restart/ui/esm/Anchor';
function Form() {

    const[count,setCount]=useState(0);
    const counter=()=>{
    setCount(prevCount => prevCount + 1);
    }
        const addDetails = async (e,object) => {
            if(window.confirm("Make sure data entered correctly! Press Ok to procees. Press Cancel to edit form.")){
         console.log(object);
         e.preventDefault();
         await addSignupData(object);
       }}


    const formik = useFormik({

        initialValues: {
            name: '',
            email: '',
            password: '',
            age:'',
            cnic:'',
            date:'',
            disease:'',
        },

        validate: values => {
            let errors = {
            }
            if(!values.name){
                errors.name = "*Required"
            }else if(!/^[a-zA-Z][a-zA-Z\\s]+$/.test(values.name)){
                errors.name = "*Must be Alphabetic"
            }
            if(!values.email){
                errors.email = "*Required"
            }else if(!/^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(values.email)){
                errors.email = "*Invalid Email Format"
            }

            if(!values.password){
                errors.password = "*Required"
            }else if(!/^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$/.test(values.password)){
                errors.password = "*Minimum eight characters, at least one uppercase, at least one lower case, at least one digit, at least one special character"
            }
            if(!values.disease){
                errors.disease = "*Required"
            }else if(!/^[a-zA-Z][a-zA-Z\\s]+$/.test(values.disease)){
                errors.disease = "*Must be Alphabetic"
            }
            if(!values.age){
                errors.age = "*Required"
            }else if(!/^(?=.?[0-9])(?=.?[#?!@$%^&*-]).{2,}$/.test(values.age)){
                errors.age = "*Maximum two characters only [e.g 17]"
            }
            if(!values.cnic){
                errors.cnic = "*Required"
            }else if(!/^(?=.?[0-9])(?=.?[#?!@$%^&*-]).{2,}$/.test(values.cnic)){
                errors.cnic = "*Shoud be 15 characters[e.g 35103-1786942-1]"
            }
            if(!values.date){
                errors.date ="*Required"
            }else if(!/^(?=.?[0-9])(?=.?[#?!@$%^&*-]).{2,}$/.test(values.date)){
                errors.date = "*Kindly choose date of admission [12-2-2021]"
            }
            if(!values.disease){
                errors.disease = "*Required"
            }else if(!/^[a-zA-Z][a-zA-Z\\s]+$/.test(values.disease)){
                errors.disease = "*Must be Alphabetic"
            }

            return errors
        }
    });



  return (
      <div className='signupform body-signup-form'>
            <div className="Forms shadow">
        <h1 className='text-center' style={{color:"white"}}> Welcome to registration Section</h1>
        <form onSubmit={formik.handleSubmit} >

            <div className="form-control" id='curve'>
                <label htmlFor="name" style={{width:"200px"}}>Name</label>
                <input type="text" id="name" name="name" id='txt' onChange={formik.handleChange} value={formik.values.name} placeholder='Enter your complete Name'style={{width:"300px"}}/>

                {formik.errors.name? <div style={{color: "red"}}>{formik.errors.name}</div>: null}
            </div>      

            <div className="form-control" id='curve'>
                <label htmlFor="cnic" style={{width:"200px"}}>CNIC</label>
                <input type="numeric" id="cnic" name="cnic" id='txt'  onChange={formik.handleChange} value={formik.values.cnic} placeholder='Enter Your CNIC number'style={{width:"300px"}}/>
                {formik.errors.cnic? <div style={{color: "red"}}>{formik.errors.cnic}</div>: null}
            </div>

            <div className="form-control" id='curve'>
                <label htmlFor="disease" style={{width:"200px"}}>Disease</label>
                <input type="text" id="disease" name="disease" id='txt' onChange={formik.handleChange} value={formik.values.disease} placeholder='Enter Patient disease'style={{width:"300px"}}/>
                {formik.errors.disease? <div style={{color: "red"}}>{formik.errors.disease}</div>: null}
            </div>

            <div className="form-control" id='curve'>
                <label htmlFor="name" placeholder='Choose Date of Admission' style={{width:"200px"}}>Date </label>
                <input type="date" id="date" name="date" id='txt'  onChange={formik.handleChange} value={formik.values.date} placeholder='Choose Date of Admission'style={{width:"300px"}}/>
                {formik.errors.date? <div style={{color: "red"}}>{formik.errors.date}</div>: null}
            </div>

            <div className="form-control" id='curve'>
                <label htmlFor="email" style={{width:"200px"}} >E-mail</label>
                <input type="email" id="email" name="email" id='txt'  onChange={formik.handleChange} value={formik.values.email} placeholder='Enter your email' style={{width:"300px"}}/>
                {formik.errors.email? <div style={{color: "red"}}>{formik.errors.email}</div>: null}
            </div>
            <div className="form-control" id='curve'>
                <label htmlFor="password" style={{width:"200px"}} >Password</label>
                <input type="password" id="password" name="password" id='txt'  onChange={formik.handleChange}
                value={formik.values.password}  placeholder='Create strong password'style={{width:"300px"}}/>
                {formik.errors.password? <div style={{color: "red"}}>{formik.errors.password}</div>: null}
            </div>
            <div className="form-control" id='curve'>
                <label htmlFor="age" style={{width:"200px"}} >Age</label>
                <input type="text" id="age" name="age" id='txt'  onChange={formik.handleChange} value={formik.values.age}  placeholder='Your current age in Years'style={{width:"300px"}}/>
                {formik.errors.age? <div style={{color: "red"}}>{formik.errors.age}</div>: null}
            </div>

            <button id="button1" className="btn btn-primary" style={{marginLeft:"560px", width:"100px",marginBottom:"10px"}} onClick={(e) => addDetails(e,formik.values)}
            >Register</button>
        </form>
    </div>
      </div>

  )
}

export default Form;