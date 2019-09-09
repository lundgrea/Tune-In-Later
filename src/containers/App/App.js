import React from "react";
import Search from "../Search/Search";
import "./App.css";
import { getFavorites } from "../../apiCalls/apiCalls";
import { Route, NavLink, Link, Switch } from "react-router-dom";
import CardContainer from "../CardContainer/CardContainer";
import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import { logout, storeFavorites } from '../../actions';
import { connect } from 'react-redux';
import  FavoriteContainer from "../Favorites/FavoriteContainer";





const App = ({ logout, error, user, favorites, storeFavorites}) => {
  const sendFavorites = async () => {
    const newFavorites = await getFavorites(user.id)
    storeFavorites(newFavorites)
  } 
  return (
  <main>
    <form className='search-form'>
      <h1>TUNE-IN LATER</h1>
        <NavLink exact to='/search'>Search</NavLink>
        {user && <NavLink exact to='/' onClick={logout}>LOGOUT</NavLink>}
      <Route 
      exact path='/search' 
      component={Search}/>
      </form>
      <section>
      <nav>
        <div className='login-div'>
          {!user && <Link  to='/sign-up'><button>Sign Up Page</button></Link>}
          {!user && <Link  to="/login"><button>Login Page</button></Link>}
        </div>
        <div className='home-nav'>
          {user && <NavLink exact to='/my-collection' onClick={sendFavorites}>Favorites</NavLink>}
          {user && <NavLink exact to='/'>Home</NavLink>}
        </div>
      </nav>
      <Route exact path="/" />
      <Route 
      exact path="/login" 
      component={LoginForm} 
      />
      <Route 
      exact path='/sign-up' 
      component={SignUpForm} 
      />
      <div className='favorites-container'>
      <Route 
      exact path='/my-collection' 
      component = {FavoriteContainer} 
      />
      <Route 
      exact path='/search'
      component= {CardContainer}/>
      </div>
      </section>
    </main>
  );
};


export const mapStateToProps = store => ({
  error: store.error,
  user: store.user,
  favorites: store.favorites
});


export const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  storeFavorites: (favorites) => dispatch(storeFavorites(favorites))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
