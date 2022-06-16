import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import LoginFormFinal from './LoginFormFinal';

function H_Login(){
    return(
      <div className='row-md-12' id='signin'>
          <div className='col-md-6' style={{height:"500px", marginLeft:"400px", paddingTop:"100px"}}>
          <LoginFormFinal/>
          </div>
         
      </div>
    )
}
export default H_Login;