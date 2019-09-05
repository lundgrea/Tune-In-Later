import { combineReducers } from 'redux';
import { albumsReducer } from './albums';
import { userReducer } from './user'

const rootReducer = combineReducers({
  albums: albumsReducer,
  login: userReducer,
  createAccount: userReducer
});

export default rootReducer;
