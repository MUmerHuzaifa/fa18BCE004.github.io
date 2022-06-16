import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './H_style.css';
import Navigate from './Navigate';
// import LoginFormFinal from './LoginFormFinal';

export default function Navbar1 (props){
    const navigate = useNavigate();

        return (
            <div className='row-md-12' id='parent_menu'>

                <div className='col-md-4' id='logo'>
                    {/* <img id='logoimg' src={this.state.pic1} alt="..." /> */}
                    <p style={{ fontSize: "20px",marginTop:"12px",fontWeight:"bold",color:"rgb(61, 191, 205)" }}>Patient Monitoring System</p>
                </div>

                <div className='col-md-8' id='menu_bar'>

                    <ul id='ul_menu'>
                        <Button class="button" id="btn" variant='dark' style={{ borderRadius: "10px",backgroundColor:"transparent",marginRight:"5px",border: "1 px solid black" }}>
                            <li >
                                <Link to="/home" className='link_tag'> Home </Link>
                            </li>
                        </Button>
                        <Button class="button" id="btn" variant='dark' style={{ borderRadius: "10px",backgroundColor:"transparent", }}>
                            <li >
                                <Link to="/members" className='link_tag'> About </Link>
                            </li>
                        </Button>
                        <Button class="button" id="btn" variant='dark' style={{ borderRadius: "10px",backgroundColor:"transparent", }}>
                            <li >
                                <Link to="/doctors" className='link_tag'>  Doctors   </Link>
                            </li>
                        </Button>
                        <Button class="button" id="btn" variant='dark' style={{ borderRadius: "10px",backgroundColor:"transparent", }}>
                            <li >
                                <Link to="/login" className='link_tag'> Login </Link>
                            </li>
                        </Button>
                        <Button class="button" id="btn" variant='dark' style={{ borderRadius: "10px",backgroundColor:"transparent", }}>
                            <li >
                                <Link to="/signup" className='link_tag'> Signup </Link>
                            </li>
                        </Button>

                        <Button class="button" id="btn" variant='dark' style={{ borderRadius: "10px",backgroundColor:"transparent", }}>
                            <li >
                                <Link to="/patients" className='link_tag'> Patients </Link>
                            </li>
                        </Button>

                      
                        <li >
                                <Button onClick={props.login}  class="button" id="btn" variant='dark' style={{ borderRadius: "10px",backgroundColor:"transparent",color:"black" }}>
                                    {props.status ? "Logout" : ("Login")}
                                    {props.status ? "Login" : localStorage.clear()}
                                  
                                    
                                    
                                     </Button>
                            </li>



                    </ul>

                </div>

               

            </div>
        );

    }


