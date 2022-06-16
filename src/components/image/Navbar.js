import React, { Component } from 'react';
import {Nav} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import './menubar.css';
class  Navbar  extends Component {
    state = { 
      
        pic1: require("./image/carlogo.png"),
        pic2: require("./image/login.jpg"),
        pic3: require("./image/dial.png"),
     } 
    render() { 
        return (

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
                        <NavDropdown title="Used Cars" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Find used cars for sale</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Featured used car</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Sell your car</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Price calculator</NavDropdown.Item>
                        </NavDropdown>
                 </Nav>
                    </li>
               
                    <li className='nav-item'>
                <Nav className="me-auto">
                        <NavDropdown title=" New Cars" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1"> Find new car</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">car comparison</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Price</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">On Road price</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.5">other car dealers</NavDropdown.Item>

                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.6">Auto store</NavDropdown.Item>
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



 
export default Navbar ;