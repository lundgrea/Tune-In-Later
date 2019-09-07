export const addAlbums = albums => ({
  type: 'ADD_ALBUMS',
  albums
});

export const login = user => ({
  type: 'LOGIN',
  user
});

export const logout = () => ({
  type: 'LOGOUT',
})

export const toggleFavorite = (id) => ({
  type: 'TOGGLE_FAVORITE',
  id
});

export const createUser = user => ({
  type: 'CREATE_USER',
  user
});

export const handleErrors = error => ({
  type: 'HANDLE_ERROR',
  error
})

