export const addAlbums = albums => ({
  type: 'ADD_ALBUMS',
  albums
});

export const login = user => ({
  type: 'LOGIN',
  user
})

export const toggleFavorite = id => ({
  type: 'TOGGLE_FAVORITE',
  id
});