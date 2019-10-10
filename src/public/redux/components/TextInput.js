import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

class TextInput extends Component {
  
  render() {

    const { type, placeholder, input, autoFocus, className } = this.props

    return (
      <div className='form-group'>
        <input
          type={type}
          className={className || 'form-control'}
          placeholder={placeholder}
          onChange={input.onChange}
          value={input.value}
          autoFocus={autoFocus || false}
        />
      </div>
    );
  }
}

export default TextInput;