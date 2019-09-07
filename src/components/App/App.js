import React from "react";
import Search from "../../containers/Search/Search";
import "./App.css";
import { Route, NavLink } from "react-router-dom";
import CardContainer from "../../containers/CardContainer/CardContainer";
import LoginForm from "../LoginForm/LoginForm";
import { SignUpForm } from "../SignUpForm/SignUpForm";
import { logout} from '../../actions';
import { connect } from 'react-redux';


// export const toggleFavoriteBlocker = () => {
//   console.log('are we even in here?')
//   return (
//     <>
//     <Route exact path="/" />
//     <h1>TUNE-IN LATER</h1>
//     <NavLink exact to="/login">
//       LOGIN
//     </NavLink>
//     <NavLink exact to='/' onClick={logout}>
//       LOGOUT
//     </NavLink>
//     <Search />
//     <SignUpForm />
//     <Route exact path="/login" render={() => <LoginForm />} />
//     <p>CAN'T FAV WITHOUT LOGGING IN</p>
//     </>
//   )
// }

const App = ({ logout, error }) => {
  
  return (
    <>
      <Route exact path="/" />
      <h1>TUNE-IN LATER</h1>
      <NavLink exact to="/login">
        LOGIN
      </NavLink>
      <NavLink exact to='/' onClick={logout}>
        LOGOUT
      </NavLink>
      <Search />
      <p>{error || <CardContainer />}</p>
      <SignUpForm />
      <Route exact path="/login" render={() => <LoginForm />} />
      

    </>
  );
};


export const mapStateToProps = store => ({
  error: store.error

});


export const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
  // loginCheck: (user) => dispatch(loginCheck(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
