
const ReceiveFormData = (props) => {
  let object = {
    userid: '',
    userpin: '',

  }
  Id: {object.userid = props.email}
  Pass:{object.userpin = props.pass}

  return (
    <div className='row-md-6' style={{ width: "50%" }}>
      <h1>
        <div className='row-md-6' style={{ backgroundColor: "skyblue" }}>
         
          from ReceiveFormData   <h1>{object.userid}</h1>
          from ReceiveFormData   <h1>{object.userpin}</h1>
        </div>
        <div className='row-md-6' style={{ backgroundColor: "blue" }}>
          props  ID:<h1> {props.id} </h1>
        </div>

        <div className='row-md-6' style={{ backgroundColor: "orange" }}>
          props Username: {props.email}
        </div>
        <div className='row-md-6' style={{ backgroundColor: "yellow" }}>
          Password: {props.pass}
        </div>


        <div className='row-md-6' style={{ backgroundColor: "green" }}>
          {/* from signup : {props.useremail}
          date of birth :{props.date} */}
          {/* first name: {props.fname}
          last name: {props.lname}
          email name: {props.userId}
          password name: {props.userPin}
          question : {props.ques} */}

        </div>

        {/* {setArr(arr[props.email])} */}


      </h1>

    </div>
  )
}

export default ReceiveFormData
