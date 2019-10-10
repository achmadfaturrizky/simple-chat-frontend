import axios from 'axios';

export function users(token){
  return {
    type: 'USERS',
    payload: axios.get('http://localhost:5000/users',{
      headers:{
        Authorization:'Bearer '+token
      }
    })
  }
}

export function chat(id,token){
  return {
    type: 'CHAT',
    payload: axios.get('http://localhost:5000/show/'+id,{
      headers:{
        Authorization:'Bearer '+token
      }
    })
  }
}

export function sendChat(id,data,token){
  return {
    type: 'SEND_CHAT',
    payload: axios.post('http://localhost:5000/send/'+id,{
      chat: data.chat
    },{
      headers: {
        Authorization: 'Bearer '+token
      }
    })
  }
}

export function receiveChat(data){
  return {
    type: 'RECEIVE_CHAT',
    payload: data
  }
}

export function setUser(id){
  return {
    type:'SET_USER',
    payload: id
  }
}