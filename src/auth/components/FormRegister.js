import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import TextInput from '../../public/redux/components/TextInput';
import { register } from '../../public/redux/actions/auth';

const FormRegister = (props) => {

  const { auth, handleSubmit, dispatch } = props
  const { isError, error, isSuccess } = auth

  const handleRegister = (value) => {
    dispatch(register(value))
    if(isSuccess){
      alert('Success')
    }
    if(isError){
      alert(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <Field
        name='firstName'
        type='text'
        component={TextInput}
        placeholder='First Name'
      />
      <Field
        name='lastName'
        type='text'
        component={TextInput}
        placeholder='Last Name'
      />
      <Field
        name='username'
        type='text'
        component={TextInput}
        placeholder='Username'
      />
      <Field
        name='email'
        type='email'
        component={TextInput}
        placeholder='Email'
      />
      <Field
        name='password'
        type='password'
        component={TextInput}
        placeholder='Password'
      />
      <Field
        name='confirmPassword'
        type='password'
        component={TextInput}
        placeholder='Confirm Password'
      />
      <div className='form-row'>
        <div className='form-group col-6'>
          <Link to='/'>
            Already account?
          </Link>
        </div>
        <div className='form-group col-6'>
          <button type='submit' className='btn btn-primary float-right'>Register</button>
        </div>
      </div>
    </form>
  );
  
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default reduxForm({form:'register'})(connect(mapStateToProps)(FormRegister));