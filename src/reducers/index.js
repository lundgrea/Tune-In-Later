import { combineReducers } from 'redux';
import { albumsReducer } from './albums';
import { userReducer } from './user'
import  { handleErrors } from './errors'

const rootReducer = combineReducers({
  albums: albumsReducer,
  user: userReducer,
  createAccount: userReducer,
  error: handleErrors
});

export default rootReducer;
