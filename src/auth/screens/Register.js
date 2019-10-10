import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';

import { auth } from '../../public/redux/actions/auth';
import FormRegister from '../components/FormRegister';

class Register extends Component {
  componentDidMount() {
    document.title = 'Register - app chat'
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
            <FormRegister />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Register);