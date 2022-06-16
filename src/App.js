import {Routes, Route} from 'react-router-dom';
// import H_Navbar1 from './H_Navbar1';
// import Forms_react_byWaseemBro from './Forms_react_byWaseemBro';

import Home from './components/Home';
import Login_Form from './components/Login_Form';
import Navbar1 from './components/Navbar1';
import FormikForms from './components/FormikForms';
import MembersInfo from './components/MembersInfo';
import LowerToUpper from './components/LowerToUpper'
import LoginPage from './components/LoginPage';
import AddPatients from './components/AddPatients';
import ReceiveFormData from './components/ReceiveFormData';
import SignUp from './components/SignUp';
import Navigate from './components/Navigate';
import CartCompo from './components/CartCompo';
import { Component } from 'react';
import tempSignup from './components/tempSignup'
import ReceiveDoctors from './components/ReceiveDoctors';
import AboutUs from './components/AboutUs';
import LoginPageNew from './components/LoginPageNew';
import {Navigate as RNavigate} from 'react-router-dom';
import NotFound from './components/NotFound';
// import DynamicStates from './DynamicStates';
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      auth: 0,
    }
    this.token = localStorage.getItem('token');
  }
  
  loginHandler = () => {
    this.setState({ auth: !this.state.auth })

  
  }

  getToken= () =>{
    const token = localStorage.getItem(token)
  }

  render() {

    return (
      <div>

        {/* <DynamicStates/> */}
        <Navbar1 login={this.loginHandler} status={this.state.auth} />
   
        <Routes>

          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login_Form />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/members" element={<AboutUs />} />
          <Route path="/addToCart" element={<LowerToUpper />} />
          <Route path="/doctors" element={<ReceiveDoctors/>}/>
          <Route path="/*" element={<NotFound/>} />

          {this.state.auth === 0 ? (<Route path='/home' element={<Home/>}/>) : (<Route path='/patients' element={<CartCompo/>}/>) }
           
          <Route path="/navigate" element={<Navigate />} />


        </Routes>
      </div>
    );

  }
}
export default App;
