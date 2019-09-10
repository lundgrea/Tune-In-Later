export const userReducer = (state = "", action) => {
  switch (action.type) {
    case "LOGIN":
      return action.user;
    case "CREATE_USER":
      return action.user;
    case "LOGOUT":
      return "Goodbye";
    case "LOGIN_CHECK":
      return "Please Loging To Favorite Albums";
    default:
      return state;
  }
};
