const Arr_Doc_Deatils= [
        
    { img: require("./imgDoctors/doc1.jpg"), id: 1, name: "Dr. Nasir Abbas", organization: "Genral Hospital Lahore", academic: "Associate Professor", speciality: "Family Medicie Obstetrics" },
    {img:require("./imgDoctors/doc2.jpg"), id: 2, name: "Dr. masood Sadiq", organization: "Masood Sadiq Clinic", academic: "Professor of medicine", speciality: "Pediatric cardiologist" },
    {img:require("./imgDoctors/doc3.jpg"),id:3, name:"Dr. Numan Khaliq", organization:"Pakistan Institute of Cardialogy",academic:"Head of department",speciality:"Cardialogist"},
    {img:require("./imgDoctors/doc4.jpg"),id:4, name:"Dr. Abdul Basit khan", organization:"Diabeties Institue of Pakistan",academic:"Professor",speciality:"Diabetologist"},
]
export function getDoctorData(){
return Arr_Doc_Deatils;
}