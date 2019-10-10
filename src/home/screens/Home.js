import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';


import './style.css';
import { logout } from '../../public/redux/actions/auth';
import Users from '../components/Users';
import Chat from '../components/Chat';

class Home extends Component {

  componentDidMount() {
    document.title = 'Home'
  }

  handleLogout = () => {
    this.props.dispatch(logout())
  }

  render() {

    const { isLoading } = this.props.auth
    
    if(isLoading){
      return (
        <div>
          <p>Loading</p>
        </div>
      )
    }

    return (
      
      <div className="container">
      <div className="hideScrollBar">
        <h3 className=" text-center">Messaging</h3>
        <div className="messaging">
          <div className="inbox_msg">
            <Users />
            <Chat />
          </div>
        </div>
        <button onClick={this.handleLogout} className='btn btn-danger'>Logout</button>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Home);