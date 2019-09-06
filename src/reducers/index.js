import { combineReducers } from 'redux';
import { albumsReducer } from './albums';
import { userReducer } from './user'

const rootReducer = combineReducers({
  albums: albumsReducer,
  user: userReducer,
  createAccount: userReducer
});

export default rootReducer;
