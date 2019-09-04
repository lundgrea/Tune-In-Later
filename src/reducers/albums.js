export const albumsReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_ALBUMS':
      return [...state, action]
    default:
      return state
  }
}







