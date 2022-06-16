import axios from 'axios';

const url = "http://localhost:4000"; //replace with heroku one

export const addSignupData = async (object) => {
  console.log(object.name);
  return await axios.post(`${url}/hostel/students`, object);
}

 export const viewPatient = async ()=>{
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
 return await axios.get(`${url}/hostel/students`, config);
 }

 export const deletePatient = async (id)=>{
 
  console.log("api ===> delete",id)
   return await axios.delete(`${url}/hostel/students/${id}`);
}
export const updatePatient = async (id,state)=>{ 
  // console.log(state.name);

  return await axios.patch(`${url}/hostel/update/${id}`,state).then((res) => {
    localStorage.setItem('tok', res.token)  });
}
 export const addLogin = async (object)=>{
   return await axios.post(`${url}/hostel/login`,object).then((res)=>{
    localStorage.setItem('token',res.data.token);
   })
}

// export const updateApplicant = async (id,state)=>{ 
//   console.log("api ===> upadte",id)
//   return await axios.post(`${url}/hostel/update/${id}`,state);
// }

