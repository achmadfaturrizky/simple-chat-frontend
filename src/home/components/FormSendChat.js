import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';

import TextInput from '../../public/redux/components/TextInput';
import './style.css';

import { sendChat } from '../../public/redux/actions/home';

const FormSendChat = (props) => {

  const handleSendChat = (value) => {
    const { auth, home, dispatch } = props
    dispatch(sendChat(home.userId,value,auth.token))
    dispatch(reset('sendChat'))
  }

  const { handleSubmit } = props

  return (
    <div className="type_msg">
      <div className="input_msg_write">
        <form onSubmit={handleSubmit(handleSendChat)}>
          <Field
            name='chat'
            type='text'
            placeholder='Type a message'
            component={TextInput}
            className='write_msg'
          />
          <button className="msg_send_btn" type='submit'><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
        </form>
      </div>
    </div>
  );
  
}

const mapStateToProps = (state) => ({
  home: state.home,
  auth: state.auth
})

export default reduxForm({form:'sendChat'})(connect(mapStateToProps)(FormSendChat));