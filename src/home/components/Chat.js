import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import socketIoClient from 'socket.io-client';
import { Scrollbars } from 'react-custom-scrollbars';
import Moment from 'moment';
import 'moment/locale/id';

import './style.css';
import FormSendChat from './FormSendChat';
import { receiveChat } from '../../public/redux/actions/home';

class Chat extends Component {

  componentDidMount() {
    const socket = socketIoClient('http://localhost:5000')

    socket.on('chat',(value) => {
      if(Number(value.receiver)===this.props.auth.userData.id && Number(value.sender)===this.props.home.userId){
        this.handleReceiveChat(value.results)
      }
    })
  }

  handleReceiveChat(value){
    const { dispatch } = this.props
    dispatch(receiveChat(value))
  }

  render() {

    const { chat } = this.props.home
    const { id } = this.props.auth.userData
    

    return (
      
      <div className="mesgs">
        <div className="msg_history">
        <Scrollbars>
          {chat.map((item) => (
            id===item.fromUserId? (
              <div className="outgoing_msg" key={item.id.toString()}>
                <div className="sent_msg">
                  <p>{item.chat}</p>
                  <span className="time_date">{Moment(item.createdAt).format('LT')}</span>
                </div>
              </div>
            ):(
              <div className="incoming_msg" key={item.id.toString()}>
                <div className="incoming_msg_img">
                  <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
                </div>
                <div className="received_msg">
                  <div className="received_withd_msg">
                  <p>{item.chat}</p>
                  <span className="time_date">{Moment(item.createdAt).format('LT')}</span>
                </div>
                </div>
              </div>
            )
          ))}
          </Scrollbars>
        </div>
        
        <FormSendChat />
      </div>
     
    );
  }
}

const mapStateToProps = (state) => ({
  home: state.home,
  auth: state.auth
})

export default connect(mapStateToProps)(Chat);