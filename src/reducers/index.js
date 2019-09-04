import { combineReducers } from 'redux'
import {albumsReducer} from './albums'

const rootReducer = combineReducers({
  albums: albumsReducer
})

export default rootReducer 
