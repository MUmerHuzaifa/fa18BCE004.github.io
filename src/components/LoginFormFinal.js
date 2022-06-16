import React, { Component } from 'react';
import Joi from 'joi-browser';
import ReceiveFormData from './ReceiveFormData';

class LoginFormFinal extends Component {
    state = { 
        details: { username : "", password: "",contact:"",dob:""},
        errors: {}
     } 

     schema = {
         username: Joi.string().required().label("Username"),
         password: Joi.string().required().label("Password"),
         contact: Joi.string().required().label("contact"),
         dob: Joi.string().required().label("date of birth")

     }

    handleChange = e => {
        const clone = {...this.state.details};
        clone[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ details: clone });
    };

    handleValidate = () => {
        const result = Joi.validate(this.state.details, this.schema, { abortEarly: false});
        
        if (!result.error) return null;

        const errors = {};

        result.error.details.map( d => (
            errors[d.path[0]] = d.message
        ));

        return errors;
    }

    handleSubmit = e => {
        e.preventDefault();

        if (window.confirm("Are You Sure? You would not be able to edit your data after Submision")) {
        
        const error = this.handleValidate();

        this.setState({ errors : error || {} });
    }
      //  if (error) return;
    }

    render() { 
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group mb-2">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control"
                    value={this.state.details.username} 
                    name="username"
                    onChange={this.handleChange} />
                    {this.state.errors.username && <div className='alert alert-danger'>{this.state.errors.username}</div>}
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="password">Password</label>
                    <input type="text" className="form-control" value={this.state.details.password} 
                    name="password"
                    onChange={this.handleChange} />
                    {this.state.errors.password && <div className='alert alert-danger'>{this.state.errors.password}</div>}
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="contact">contact</label>
                    <input type="text" className="form-control"
                    value={this.state.details.contact} 
                    name="contact"
                    onChange={this.handleChange} />
                    {this.state.errors.contact && <div className='alert alert-danger'>{this.state.errors.contact}</div>}
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="dob">date of birth</label>
                    <input type="date" className="form-control"
                    value={this.state.details.dob} 
                    name="dob"
                    onChange={this.handleChange} />
                    {this.state.errors.dob && <div className='alert alert-danger'>{this.state.errors.dob}</div>}
                </div>
                <button className="btn btn-primary form-control">signup</button>
                </form>

                {/* <ReceiveFormData useremail={this.state.details.username} date={this.state.details.dob}/> */}
            </div>
        );
    }
}
 
export default LoginFormFinal;