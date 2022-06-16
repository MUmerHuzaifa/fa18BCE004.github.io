import React, { useState } from 'react';
import './H_style.css'
import { Form } from 'react-bootstrap'
import { Button } from 'bootstrap'
import ReceiveFormData from './ReceiveFormData';

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allentry, setAllentry] = useState([]);
    const[data, setData]=useState([]);
    const[count,setCount]=useState(0);

    const submitForm = (e) => {
        if(window.confirm("Are You Sure?")){
        e.preventDefault();
        setCount(prevCount => prevCount + 1);
        const newentry = {count:count, email: email, password: password };
        setAllentry([...allentry, newentry]);
        
        }
        
        // console.log(allentry);
    }


    return (
        <div>
            <Form action='' id='form' onSubmit={submitForm}>
                <div>
                    <label htmlFor='email' >Email </label>
                    <input type="text" name="email" id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                </div>

                <div>
                    <label htmlFor='password' >Password </label>
                    <input type="password" name="password" id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}


                    />
                </div>

                <button type="submit" className='btn btn-danger' >Login</button>
            </Form>

            <div>
                {
                    allentry.map((ele) => {
                        return (
                            <div>
                                {/* <p>{ele.email}</p>
                               <p>{ele.password}</p> */}

                              <ReceiveFormData  id={ele.count} email={ele.email} pass={ele.password}/>
                              {/* <ReceiveFormData email={ele.allentry}/> */}
                                

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LoginPage
