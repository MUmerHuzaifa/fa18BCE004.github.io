import React from 'react';
import CartCompo from './CartCompo';
import { useLocation } from 'react-router-dom';


function Navigate() {
    const location = useLocation();
    const { name, email, cnic, disease, date, age } = location.state;
  return (
    <div>
        <CartCompo name={name} email={email} age={age} cnic={cnic} disease={disease} date={date}/>
    </div>
  )
}

export default Navigate;