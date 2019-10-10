const initialState = {
  isLoading: false,
  isError: false,
  users: [],
  chat: [],
  userId: 0,
}

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USERS_PENDING':
      return {...state, isLoading: true}
    case 'USERS_FULFILLED':
      return {...state, isLoading: false, users:action.payload.data}
    case 'USERS_REJECTED':
      return {...state, isLoading:false, isError:true}
    case 'CHAT_PENDING':
      return {...state, isLoading: true}
    case 'CHAT_FULFILLED':
      return {...state, isLoading: false, chat:action.payload.data}
    case 'CHAT_REJECTED':
      return {...state, isLoading:false, isError:true}
    case 'SEND_CHAT_PENDING':
      return {...state, isLoading: true}
    case 'SEND_CHAT_FULFILLED':
      return {...state, isLoading: false, chat:[...state.chat, action.payload.data]}
    case 'SEND_CHAT_REJECTED':
      return {...state, isLoading:false, isError:true}
    case 'RECEIVE_CHAT':
      return {...state, chat:[...state.chat, action.payload]}
    case 'SET_USER':
      return {...state, userId:action.payload}
    default:
      return state;
  }
};

export default homeReducer;