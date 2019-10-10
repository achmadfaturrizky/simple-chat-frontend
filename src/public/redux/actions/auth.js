import axios from 'axios';

export function register(data){
  return {
    type: 'REGISTER',
    payload: axios.post('http://localhost:5000/register',{
      firstName:data.firstName,
      lastName:data.lastName,
      username:data.username,
      email:data.email,
      password:data.password,
      confirmPassword: data.confirmPassword
    })
  }
}

export function login(data){
  return {
    type: 'LOGIN',
    payload: axios.post('http://localhost:5000/login',{
      username:data.username,
      password:data.password
    })
  }
}

export function logout(){
  return {
    type: 'LOGOUT',
    payload: false
  }
}

export function auth(data){
  return {
    type: 'AUTH',
    payload: data
  }
}