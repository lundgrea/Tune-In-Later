export const storeFavorites = (state = [], action) => {
  switch (action.type) {
    case "STORE_FAVORITES":
      return action.albums;
    default:
      return state;
  }
};
