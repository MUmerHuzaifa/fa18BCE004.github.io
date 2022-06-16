// import React, { useState } from 'react';
// import './H_style.css'
// import { Form } from 'react-bootstrap'
// import { Button } from 'bootstrap'

//  const DynamicStates = () => {

//     const [userdata, setUserdata] = useState({
//         fname:"", lname:"", username:"", password:"",admitdate:"",contact:"",address:""
//     });

//     let name, value;
//     const handleInput=(e)=>{
//         name=e.target.name;
//         value=e.target.value;
//         setUserdata({...userdata,[name]:value});
//     }
//     const submitForm = (e) => {
//         if(window.confirm("Are You Sure?")){
//         e.preventDefault();
//         const newentry = { userdata:userdata };
//         setUserdata([...userdata, newentry]);
//         }
    
        
//         // console.log(allentry);
    


//     return (
//         <div>
//             <Form action='' id='form' onSubmit={submitForm}>
               
//                 <div>
//                     <label htmlFor='fname' >First Name </label>
//                     <input type="text" name="fname" id="fname"
//                         value={userdata.fname}
//                         onChange={handleInput}
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor='lname' >Last Name </label>
//                     <input type="text" name="lname" id="lname"
//                         value={userdata.lname}
//                         onChange={handleInput}
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor='username' >Username </label>
//                     <input type="text" name="username" id="username"
//                         value={userdata.username}
//                         onChange={handleInput}
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor='password' >Password </label>
//                     <input type="password" name="password" id="password"
//                         value={userdata.password}
//                         onChange={handleInput}
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor='admitdate' >Date of admission</label>
//                     <input type="date" name="admitdate" id="admitdate"
//                         value={userdata.admitdate}
//                         onChange={handleInput}
//                     />
//                 </div>

//                 <button type="submit" className='btn btn-danger' >Login</button>
//             </Form>

//             {/* <div>
//                 {
//                     allentry.map((ele) => {
//                         return (
//                             <div>
//                                 <p>{ele.email}</p>
//                                <p>{ele.password}</p>
//                             </div>
//                         )
//                     })
//                 }
//             </div> */}


//         </div>
//     )
// }
// }

// export default DynamicStates;
