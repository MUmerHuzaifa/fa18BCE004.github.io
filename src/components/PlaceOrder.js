import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import { Textfield } from './Textfield';
import * as Yup from 'yup';
import ReceiveFormData from './ReceiveFormData';

const PlaceOrder = () => {
    const validate = Yup.object({
        firstName: Yup.string().label('First Name')
            .max(15, 'Must be 15 characters or less')
            .required('This is Required'),

        lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('This is Required'),

        email: Yup.string()
            .email('Email is invalid')
            .required('This is Required'),


        password: Yup.string()
            .min(8, 'Password must be 8 characters')
            .required('This is Required'),

        question: Yup.string()
            .min(4, 'Too Short!')
            .max(8, 'Too Long!')
            .required('This is Required'),


    })
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                question: '',


            }}
            validationSchema={validate}>



            {formik => (
                <div className='col-md-8' id='order'>
                    <h1 >
                        Place Order
                    </h1>
                    {console.log(formik.values)}
                    <Form>
                        <Textfield label="First Name" name="firstName" type="text" />
                        <Textfield label="Last Name" name="lastName" type="text" />
                        <Textfield label="Email" name="email" type="email" />
                        <Textfield label="Password" name="password" type="password" />
                        <Textfield label="Favourite Food" name="question" type="text" />


                        <label>Select</label> <br></br>
                        <input type="checkbox" id="IOTbased" name="IOTbased" value="IOTbased"></input>
                        <label for="IOTbased"> IOT Based Projects </label><br></br>
                        <input type="checkbox" id="ML" name="ML" value="ML"></input>
                        <label for="ML"> AI Based</label><br></br>
                        <input type="checkbox" id="Embeded" name="Embeded" value="Embeded"></input>
                        <label for="Embeded"> Embeded System Based</label><br></br>

                        <label>Gender</label> <br></br>
                        <input type="radio" id="html" name="gender" value="HTML">
                        </input>
                        <label for="html">Male</label> <br></br>
                        <input type="radio" id="css" name="gender" value="CSS">
                        </input>
                        <label for="css">Female</label> <br></br>


                        <button className='btn btn-primary' type='submit' style={{ marginLeft: "100px" }}> Submit  </button>
                     
                                        
                                        {/* <ReceiveFormData email={ele.allentry}/> */}

                    </Form>
                </div>
            )}
        </Formik>
    );
}
export default PlaceOrder;

