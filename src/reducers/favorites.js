export const storeFavorites = (state = [], action) => {
  switch (action.type) {
    case "STORE_FAVORITES":
      return action.albums;
    case "DELETE_FAVORITE":
      return action.albumId;
    default:
      return state;
  }
};
