export const userReducer = (state={}, action) => {
  switch(action.type) {
    case 'LOGIN' :
      return action.user
    case 'CREATE_USER' :
      return action.user
    default : 
      return state
  } 
}