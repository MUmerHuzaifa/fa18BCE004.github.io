import React, { useState,useEffect } from 'react';
import { getDoctorData } from './DoctorsDetails';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './H_style.css';
import "./doctorBcakground.css"
import Lower_footer from './Lower_footer';

const  ReceiveDoctors = () =>  {
  const [state,setstate] = useState(null);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  useEffect(()=>{
    if(!token){
      navigate("/login")
    }

    setstate(getDoctorData);

  },[])

    return (
      <div>
                <h1 style={{textAlign:"center",color:"white",padding:"20px"}}>Doctors' Information</h1>

      
      <div className='row-md-12' id='doctor_card' >
        {
          state?.map(e => (
            <Card style={{ width: "500px",marginRight:"50px",marginTop:"50px" }}>
              <div className='col-md-2' id='div1' style={{ width: "70%" }}>
                <Card.Img variant="top" src={e.img} style={{ borderRadius: "0px", width: "100%",marginLeft:"80px" }} />
              </div>
              <div className='col-md-2' id='div2' style={{ width: "100%",textAlign:"center" }}>
                <Card.Body>
                  <Card.Title>{e.name}</Card.Title>
                  <Card.Text>
                    Speciality: {e.speciality}
                  </Card.Text>
                  <Card.Text>
                    Organization : {e.organization}
                  </Card.Text>
                  <Card.Text>
                    Academics : {e.academic}
                  </Card.Text>
                </Card.Body>
              </div>
              <div className='col-md-2' id='div3' style={{ width: "100%" }}>
                <Button id="button1" class="button" variant='success' style={{ borderRadius: "50px",marginLeft:"170px",marginTop:"20px",marginBottom:"20px" }}>
                  <li >
                    <Link to="/signup" className='link_tag' > Register Now   </Link>l
                  </li>
                </Button>
              </div>
            </Card>
          ))}
    <Lower_footer />
      </div>
      </div>
    )
  
}

export default ReceiveDoctors;
