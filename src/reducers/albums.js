export const albumsReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_ALBUMS':
      return action
    default:
      return state
  }
}







