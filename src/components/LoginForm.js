import React, { Component } from 'react';

class LoginForm extends Component {
    state = { 
        details: {username: "", password: ""}
    } 

    handleSubmit = e => {
        e.preventDefault();
    }

    handleChange= e => {
        const clone = {...this.state.details};
        clone[e.currentTarget.name] =  e.currentTarget.value;
        this.setState({ details: clone })
 
    }

    render() { 
        return (
            <div>
           <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input type="text" placeholder='username' value={this.state.details.username} onChange={this.handleChange} name="username" />
                    <br></br>
                    <label>Password</label>
                    <input type="text" placeholder='password' value={this.state.details.password} onChange={this.handleChange} name="password" /><br></br>
                    <button>LogIn</button>
                </form> 
           
            </div>

        );

    }
}
               
 
export default LoginForm;




