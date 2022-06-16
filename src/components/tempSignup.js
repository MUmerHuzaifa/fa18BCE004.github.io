import { useState} from 'react';

const View = () => {

  const [openDialog, setOpenDialog] = useState(true);
  const [state, setState] = useState(null);

  
  function handleChange(e) {
    setState({...state,[e.target.name]:[e.target.value]})
}


  const updateDetails =  (id) => {
    setOpenDialog(true)
    console.log("Api hit");
  //  updateApplicant(id,state);
  }

  return (
    <>
    {
        openDialog &&
        <div className="overly" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100vh", background: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className="form-popup p-4" style={{ height: "400px", width: "400px", background: "#ffffff", borderRadius: "10px" }}>
            {
              //`${state?.studentName},${state?.registrationNumber},${state?._id}`  
              <form>
                <h3 className="text-center">Update Form</h3>
                <label className='mb-2'> Username </label>
                <input type="text" className="form-control mb-3" name="studentName"  onChange={(e)=>handleChange(e)} ></input>
                <label className='mb-2'> Password</label>
                <input type="text" className="form-control mb-3" name="registrationNumber"  onChange={(e)=>handleChange(e)} ></input>
                </form>

            }
            <button className="btn btn-success" style={{marginLeft:"130px",marginTop:"20px"}} 
             onClick={(e) => updateDetails(e) }>Update </button>
          </div>
        </div>
      }
    </>
  );
};

export default View;
