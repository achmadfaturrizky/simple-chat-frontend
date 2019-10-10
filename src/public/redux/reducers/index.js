import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './auth';
import homeReducer from './home';

const reducers = combineReducers({
  form: formReducer,
  auth: authReducer,
  home: homeReducer
});

export default reducers;