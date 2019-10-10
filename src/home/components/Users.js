import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';

import './style.css';
import { users, chat, setUser } from '../../public/redux/actions/home';

class Users extends Component {

  componentDidMount() {
    this.props.dispatch(users(this.props.auth.token))
  }

  handleShowUser(id){
    this.props.dispatch(setUser(id))
    this.props.dispatch(chat(id,this.props.auth.token))
  }
  
  render() {

    const { users, userId } = this.props.home

    return (
      <div className="inbox_people">
        <div className="headind_srch">
          <div className="recent_heading">
            <h4>Recent</h4>
          </div>
          <div className="srch_bar">
            <div className="stylish-input-group">
              <input type="text" className="search-bar"  placeholder="Search" />
              <span className="input-group-addon">
                <button type="button"> <i className="fa fa-search" aria-hidden="true"></i> </button>
              </span>
            </div>
          </div>
        </div>
        <div className="inbox_chat">
          {users.map((item) => (
            <div className={userId===item.id? ('chat_list active_chat'):('chat_list')} key={item.id.toString()} onClick={()=>this.handleShowUser(item.id)}>
              <div className="chat_people">
                <div className="chat_img">
                  <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
                </div>
                <div className="chat_ib">
                  <h5>{item.firstName+' '+item.lastName} <span className="chat_date">Dec 25</span></h5>
                  <p>Test, which is a new approach to have all solutions astrology under one roof.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  home: state.home
})

export default connect(mapStateToProps)(Users);