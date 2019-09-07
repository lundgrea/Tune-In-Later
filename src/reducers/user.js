// import {toggleFavoriteBlocker} from '../components/App/App'

export const userReducer = (state='', action) => {
  switch(action.type) {
    case 'LOGIN' :
      return action.user
    case 'CREATE_USER' :
      return action.user
    case 'LOGOUT' :
      return ''
    case 'LOGIN_CHECK':
      // toggleFavoriteBlocker()
      return ''
    default : 
      return state
  } 
}