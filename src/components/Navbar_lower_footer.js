import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Tooltip } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';
import "./menubar.css";


class Navbar_lower_footer extends Component {
  state = {
    easypaisa: require("./image/easypaisa.png"),
    jazzcash: require("./image/jazzcash.png"),
    visa: require("./image/visa.png"),
    bookkaro: require("./image/bookkaro.PNG"),
    cash: require("./image/cash.png"),
    firstLabel: "Payment",
    secondLabel: "Subscribe",
    thirdLabel: "Keep in Touch",
    facebook: require("./image/facebook.png"),
    instagram: require("./image/instagram.png"),
    linkedin: require("./image/linkedin.png"),
  }
  render() {
    return (
      <div className='row-md-12' id='Parent_fotter'>

        <div className='col-md-3' id='first_footer'>
          <h6 style={{ marginTop: "30px", fontSize: "large" }} >{this.state.firstLabel}</h6>
          <OverlayTrigger style={{ marginTop: "30px" }} id='padding_icon_fotter' className='images_fotter' overlay={<Tooltip id="tooltip">easypaisa</Tooltip>}>
            <span className="d-inline-block">
              <Button href='https://bookkaru.com/' variant='secondary'>
                <img className='images_fotter' src={this.state.easypaisa} alt="..." />
              </Button>
            </span>
          </OverlayTrigger>
          <OverlayTrigger className='images_fotter' overlay={<Tooltip id="tooltip">jazzcash</Tooltip>}>
            <span className="d-inline-block">
              <Button href='https://bookkaru.com/' variant='secondary'>
                <img className='images_fotter' src={this.state.jazzcash} alt="..." />
              </Button>
            </span>
          </OverlayTrigger>
          <OverlayTrigger className='images_fotter' overlay={<Tooltip id="tooltip">visa</Tooltip>}>
            <span className="d-inline-block">
              <Button href='https://bookkaru.com/' variant='secondary'>
                <img className='images_fotter' src={this.state.visa} alt="..." />
              </Button>
            </span>
          </OverlayTrigger>
          <OverlayTrigger className='images_fotter' overlay={<Tooltip id="tooltip">bookkaro</Tooltip>}>
            <span className="d-inline-block" id='span_id'>
              <Button href='https://bookkaru.com/' variant='secondary'>
                <img className='images_fotter' src={this.state.bookkaro} alt="..." />
              </Button>
            </span>
          </OverlayTrigger>
          <OverlayTrigger className='images_fotter' overlay={<Tooltip id="tooltip">cash</Tooltip>}>
            <span className="d-inline-block">
              <Button href='https://bookkaru.com/' variant='secondary'>
                <img className='images_fotter' src={this.state.cash} alt="..." />
              </Button>
            </span>
          </OverlayTrigger>
        </div>

        <div className='col-md-4' id='second_footer'>
          <h6 style={{ marginLeft: "40px", marginTop: "30px", fontSize: "large" }} > {this.state.secondLabel} <br></br> </h6>
          <Form className="d-flex" id='subcribe'>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{marginTop:"0px",height:"40px"}}
            />
            <Button id="button1" style={{ fontSize: "large", height:"50px" }} variant="secondary"> Subscribe </Button>
          </Form>

        </div>

        <div className='col-md-2' id='third_footer' style={{ marginLeft: "200px" }}>
          <h6 style={{ marginLeft: "30px", marginTop: "30px", fontSize: "large" }} > {this.state.thirdLabel} </h6>

          <OverlayTrigger style={{ marginTop: "30px" }} id='padding_icon_fotter' overlay={<Tooltip id="tooltip">facebook</Tooltip>}>
            <span className="d-inline-block">
              <Button href='https://bookkaru.com/' variant='secondary'>
                <img className='images_fotter1' src={this.state.facebook} alt="..." />
                { } </Button>
            </span>
          </OverlayTrigger>
          <OverlayTrigger className='images_fotter' overlay={<Tooltip id="tooltip">instagram</Tooltip>}>
            <span className="d-inline-block">
              <Button href='https://bookkaru.com/' variant='secondary'>
                <img className='images_fotter1' src={this.state.instagram} alt="..." />
                { } </Button>
            </span>
          </OverlayTrigger>
          <OverlayTrigger className='images_fotter' overlay={<Tooltip id="tooltip">linkedin</Tooltip>}>
            <span className="d-inline-block">
              <Button href='https://bookkaru.com/' variant='secondary'>
                <img className='images_fotter1' src={this.state.linkedin} alt="..." />
                { } </Button>
            </span>
          </OverlayTrigger>
        </div>

        <div className='row-md-4' id='fourth_footer'>
          <hr style={{ width: "80%", marginLeft: "10%" }}></hr>
          <div className='bottom_fotter'>
            <Navbar style={{ fontSize: "large", color: "white" }} >
              <Container fluid >
                <Nav.Link style={{ color: "white" }} href="">About Us</Nav.Link>
                <Nav.Link style={{ color: "white" }} href="#">Terms & Conditions Of Use</Nav.Link>
                <Nav.Link style={{ color: "white" }} href="">FAQs</Nav.Link>
                <Nav.Link style={{ color: "white" }} href="">Support</Nav.Link>
              </Container>
            </Navbar>
          </div>
          <h6 style={{ textAlign: "center", color: "#59646d", fontSize: "medium" }}>Copyright © 2020 <Navbar.Brand style={{ color: "blue" }} href="#">Navbar</Navbar.Brand> All Rights Reserved.</h6>


        </div>
      </div>
    );
  }
}

export default Navbar_lower_footer;