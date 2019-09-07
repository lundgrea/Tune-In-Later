import { combineReducers } from 'redux';
import { albumsReducer } from './albums';
import { userReducer } from './user';
import  { handleErrors } from './errors';
import { storeFavorites } from "./favorites";

const rootReducer = combineReducers({
  albums: albumsReducer,
  user: userReducer,
  error: handleErrors,
  favorites: storeFavorites
});

export default rootReducer;
