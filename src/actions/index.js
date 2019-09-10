export const addAlbums = albums => ({
  type: "ADD_ALBUMS",
  albums
});

export const login = user => ({
  type: "LOGIN",
  user
});

export const logout = () => ({
  type: "LOGOUT"
});

export const toggleFavorite = (id) => ({
  type: "TOGGLE_FAVORITE",
  id
});

export const createUser = user => ({
  type: "CREATE_USER",
  user
});

export const handleErrors = error => ({
  type: "HANDLE_ERROR",
  error
});

export const storeFavorites = albums => ({
  type: "STORE_FAVORITES",
  albums
});

// export const deleteFavorite = albumId => ({
//   type: "DELETE_FAVORITE",
//   albumId
// });
