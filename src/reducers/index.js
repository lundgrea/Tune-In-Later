import { combineReducers } from 'redux';
import { albumsReducer } from './albums';
import { loginReducer } from './login'

const rootReducer = combineReducers({
  albums: albumsReducer,
  login: loginReducer
});

export default rootReducer 
