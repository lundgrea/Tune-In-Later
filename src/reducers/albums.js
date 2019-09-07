export const albumsReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_ALBUMS':
      return action.albums
    case 'TOGGLE_FAVORITE':
      return (state.map(album => {
        if(album.album_id === action.id) {
          album.isFavorite = !album.isFavorite
        } 
        return album
      }))
    default:
      return state
  }
}







