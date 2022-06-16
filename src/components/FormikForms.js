import React from 'react';
import { useFormik } from 'formik';

const FormikForms = () => {
  const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'This Field Required';
    } else if (values.username.length > 15) {
      errors.username = 'Must be 15 characters or less';
    }

    if (!values.password) {
      errors.password = 'This Field Required';
    } else if (values.password.length > 15) {
      errors.password = 'Must be 20 characters or less';
    }


    if (!values.email) {
      errors.email ='This Field Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    onSubmit: values => {
      console.log(values);
    },
    validate,
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            name=''
            id='email'
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        <div>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            name=''
            id='username'
            value={formik.values.username}
            onChange={formik.handleChange}
          />
        </div>
        {formik.errors.username ? <div>{formik.errors.username}</div> : null}
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            name=''
            id='password'
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        <button type='submit'> submit</button>
      </form>
    </div>
  );
};

export default FormikForms;
