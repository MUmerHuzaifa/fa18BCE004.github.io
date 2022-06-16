import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { viewPatient, deletePatient, updatePatient } from '../services/api.js'
import './CartCompo.css'
const CartCompo = () => {

    const [patientDetails, setPatientDetails] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [state, setState] = useState(null);
    // authorization starts

    const [state1,setstate1] = useState(null);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    useEffect(()=>{
      if(!token){
        navigate("/login")
      }
  
      setstate1(state);
  
    },[])
  


    //authoriation ends
    function handleChange(e) {
        setState({ ...state, [e.target.name]: [e.target.value] })
    }


    useEffect(() => {
        getPatientDetails();
    }, []);
    useEffect(() => {
        getPatientDetails();
    }, [patientDetails]);

    const getPatientDetails = async () => {
        const received = await viewPatient();
        setPatientDetails(received.data);
    }

    const deleteData = (id) => {
        if (window.confirm("Patient will DELETED by pressing OK")) {
            console.log("Request to delete");
            deletePatient(id);
        }
    }

    const updateData = (id,state) => {
        if(window.confirm("Data will be changed by Pressing OK!")){
            updatePatient(id, state);
            
            setOpenDialog(!true)
       
        
    }}
    return (
        <>
            <div>
                <table className={"table table-hover m-3 text-center"}>
                    <thead>
                        <tr>
                            <th scope='col'>Patient ID</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Email Address</th>
                            <th scope='col'>Disease</th>
                            <th scope='col'>CNIC</th>
                            <th scope='col'>Age</th>
                            <th scope='col'>Date of Admission</th>

                        </tr>
                    </thead>
                    <tbody>
                        {patientDetails?.map((c) => {
                            return (
                                <tr  id="pub_imag1">
                                    <td>{c._id}</td>
                                    <td>{c.name}</td>
                                    <td>{c.email}</td>
                                    <td>{c.disease}</td>
                                    <td>{c.cnic}</td>
                                    <td>{c.age}</td>
                                    <td>{c.date}</td>
                                    <td>
                                        <button id="button1" className="btn btn-danger" style={{marginRight:"80px"}} onClick={() => deleteData(c._id)}>Delete</button>
                                        <br></br>
                                        <td><button  id="button1" className="btn btn-success"
                                         onClick={() => { setOpenDialog(true); setState(c) }} style={{marginLeft:"120px", marginTop:"-70px"}}  >Update </button></td>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            {
                openDialog &&
                <div className="overly" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100vh", background: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div className="form-popup p-1" style={{ height: "600px", width: "700px", background: "#ffffff", borderRadius: "10px" }}>
                        {
                            //`${state?.studentName},${state?.registrationNumber},${state?._id}`  
                            <form>
                                <h3 className="text-center">UPDATE PATIENT INFORMATION</h3>
                                <div className="container" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: "600px", height: "600px" }}>
                                    
                                <div className="child">
                                        <label className='mb-1'> <b>Name</b> </label>
                                        <input type="text" className="form-control mb-3" name="name" id="txt" value={`${state?.name}`} onChange={(e) => handleChange(e)} ></input>
                                    </div>
                                    <div className="child">
                                        <label className='mb-1'> <b>CNIC</b> </label>
                                        <input type="text" className="form-control mb-3" name="cnic"  id="txt" value={`${state?.cnic}`} onChange={(e) => handleChange(e)} ></input>

                                    </div>
                                    <div className="child">
                                        <label className='mb-1'><b> Disease</b></label>
                                        <input type="text" className="form-control mb-3" name="disease"  id="txt" value={`${state?.disease}`} onChange={(e) => handleChange(e)} ></input>

                                    </div>
                                    <div className="child">
                                        <label className='mb-1'> <b>Date</b> </label>
                                        <input type="date" className="form-control mb-3" name="date"  id="txt"  value={`${state?.date}`} onChange={(e) => handleChange(e)} ></input>

                                    </div>
                                    <div className="child">
                                        <label className='mb-1'> <b> Address</b> </label>
                                        <input type="text" className="form-control mb-3" name="email"  id="txt" value={`${state?.email}`} onChange={(e) => handleChange(e)} ></input>

                                    </div>
                                    <div className="child">
                                        <label className='mb-1'> <b>Password</b> </label>
                                        <input type="text" className="form-control mb-3" name="password"  id="txt" value={`${state?.password}`} onChange={(e) => handleChange(e)} ></input>

                                    </div>
                                    <div className="child">
                                        <label className='mb-1'> <b>Age</b></label>
                                        <input type="text" className="form-control mb-3" name="age"  id="txt" value={`${state?.age}`} onChange={(e) => handleChange(e)} ></input>

                                    </div>
                                    <div className="child">
                                        
                                    <button id="button1" className="btn btn-success" style={{ marginLeft: "130px", marginTop: "20px" }}
                            onClick={() => updateData(patientDetails._id,state)}>Update </button>
                                    </div>


                                </div></form>


                        }
                        
                    </div>
                </div>

            }
        </>
    );
};

export default CartCompo;