const initialState = {
  token: '',
  isLoading: false,
  isError: false,
  isLogin: false,
  isSuccess: false,
  error: '',
  userData: {}
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_PENDING':
      return {...state, isLoading: true}
    case 'REGISTER_FULFILLED':
      return {...state, isLoading: false, isSuccess:true, error:''}
    case 'REGISTER_REJECTED':
      return {...state, isLoading:false, isError:true, error: action.payload.response.data.message}
    case 'LOGIN_PENDING':
      return {...state, isLoading: true}
    case 'LOGIN_FULFILLED':
      localStorage.setItem('auth',JSON.stringify({token:action.payload.data.token, userData: action.payload.data.userData}))
      return {...state, isLoading: false, isLogin: true, token: action.payload.data.token, userData: action.payload.data.userData, error:''}
    case 'LOGIN_REJECTED':
      return {...state, isLoading:false, isError:true, error: action.payload.response.data.message}
    case 'LOGOUT':
      localStorage.clear()
      return {...state, isLogin: false, token:''}
    case 'AUTH':
      return {...state, isLogin: true, token:action.payload.token, userData:action.payload.userData}
    default:
      return state;
  }
};

export default authReducer;