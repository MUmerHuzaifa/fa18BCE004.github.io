import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';

import './menubar.css';
class  Menu extends Component {
    state = { 
    pic1: require("./image/logo_HMS.PNG"),
    pic2: require("./image/login.jpg"),
    pic3: require("./image/dial.png"),


     } 
    render() { 
        return(
              <div className='row-md-12' id='parent_menu'>
                <div className='col-md-3' id='logo'>
                    <img id='logoimg' src={this.state.pic1} alt="..."/>
                </div>
              <div className='col-md-6' id='menu'>
                
                    <ul id='ul_menu'>
                    <li className='nav-item'>
                        <a className='nav-link' href="https://www.google.com/">Home</a>
                    </li>
                    <li className='nav-item'>
                    <Nav className="me-auto">
                            <NavDropdown title="For Patient" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Check Vital Signs</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                     </Nav>
                        </li>
                   
                        <li className='nav-item'>
                    <Nav className="me-auto">
                            <NavDropdown title=" Doctors" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1"> Family Physician</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Pediatrician</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Cardiologist</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Gynecologist</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Pulmonologist</NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.6">Gastroenterologist</NavDropdown.Item>
                            </NavDropdown>


                     </Nav>
                        </li>
                    <li className='nav-item'>
                        <a className='nav-link' href="#"> | Login / Sign up</a>  </li>
                        <img id='loginimg' src={this.state.pic2}  alt="..."/>
                    </ul>       
               
             </div>
             
                <div className='col-md-3' id='login'>
                    <img id='dialimg' src={this.state.pic3} alt="..."/>
                  <p id='p_contact'>  For instance <br/>Call us now: 03006160030</p>

                </div>
             
            </div>
        );
       
    }
}
 
export default Menu ;


