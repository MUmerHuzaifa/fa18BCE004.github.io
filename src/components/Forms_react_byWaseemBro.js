// e.preventdefault ki waja say refresh ko prevent krway ga...
import React, { useState } from 'react';
// import './App.css';

function App() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    dateOfBirth: '',
  });

  const [errors, setErrors] = useState({});

  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   setUser({ ...user, [name]: value });
  // };

  const handleChange = (e, name) => {
    // validate();
    const { value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // const [name, setName] = useState('name');
  // const [email, setEmail] = useState('');
  // const [name, setName] = useState('name');
  // const [email, setEmail] = useState('');

  // const handleName = e => {
  //   setName(e.target.value);
  // };

  // const handleEmail = e => {
  //   setEmail(e.target.value);
  // };

  // const handleName = e => {
  //   setName(e.target.value);
  // };

  // const handleEmail = e => {
  //   setEmail(e.target.value);
  // };

  const validate = () => {
    if (user.name.length < 5) {
      setErrors({ ...errors, name: 'Name should be 5 character long' });
    } else {
      setErrors({});
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // validate();
    // for (let i = 0; i < e.target.elements.length - 1; i++) {
    //   console.log(e.target.elements[i].value);
    // }
  };

  return (
    <div className='App'>
      <form onSubmit={handleSubmit} autoComplete='off'>
        <div className='container'>
          <div className='item'>
            <input
              style={{ outline: 'none', borderColor: errors.name ? 'red' : '' }}
              type='text'
              placeholder='Enter name...'
               //onChange={handleName}
              onChange={e => handleChange(e, 'name')}
              value={user.name}
              // name='name'
              id=''
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div className='item'>
            <input
              type='email'
              placeholder='Enter email...'
              // name='email'
              value={user.email}
              onChange={e => handleChange(e, 'email')}
              // onChange={handleEmail}
              id=''
            />
          </div>
          <div className='item'>
            <input
              type='password'
              placeholder='password...'
              // onChange={}
              value={user.password}
              onChange={e => handleChange(e, 'password')}
              // onChange={handleChange}
              // name='password'
              id=''
            />
          </div>
          <div className='item'>
            <input
              type='date'
              placeholder='DOB...'
              // onChange={handleEmail}
              value={user.dateOfBirth}
              // onChange={handleChange}
              onChange={e => handleChange(e, 'dateOfBirth')}
              // name='dateOfBirth'
              id=''
            />
          </div>
          <input type='submit' value='Submit' />
        </div>
      </form>
    </div>
  );
}

export default App;
