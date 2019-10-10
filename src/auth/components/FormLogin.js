import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import TextInput from '../../public/redux/components/TextInput';
import { login } from '../../public/redux/actions/auth';

const FormLogin = (props) => {

  const { auth, handleSubmit, dispatch } = props
  const { isError, error } = auth

  const handleLogin = (value) => {
    dispatch(login(value))
    if(isError){
      alert(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <Field
        name='username'
        type='text'
        component={TextInput}
        placeholder='Email or username'
        autoFocus
      />
      <Field
        name='password'
        type='password'
        component={TextInput}
        placeholder='Password'
      />
      <div className='form-row'>
        <div className='form-group col-6'>
          <Link to='/register'>
            Create account?
          </Link>
        </div>
        <div className='form-group col-6'>
          <button type='submit' className='btn btn-primary float-right'>Login</button>
        </div>
      </div>
    </form>
  );
  
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default reduxForm({form:'login'})(connect(mapStateToProps)(FormLogin));