import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';

import FormLogin from '../components/FormLogin';
import { auth } from '../../public/redux/actions/auth';

class Login extends Component {
  
  componentDidMount() {
    document.title = 'Login - app chat'
    const checkAuth = JSON.parse(localStorage.getItem('auth'))
    if(checkAuth){
      this.props.dispatch(auth(checkAuth))
    }
  }

  render() {
    
    return (
      <div className='container-fluid'>
        <div className='row justify-content-md-center align-items-center' style={{height:600}}>
          <div className='col-md-4'>
            <FormLogin />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Login);