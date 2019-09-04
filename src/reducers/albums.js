export const albumsReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_ALBUMS':
      return action.albums
    default:
      return state
  }
}







