import React from "react";
import Search from "../Search/Search";
import "./App.css";
import { getFavorites } from "../../apiCalls/apiCalls";
import { Route, NavLink, Link } from "react-router-dom";
import CardContainer from "../CardContainer/CardContainer";
import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import { logout, storeFavorites } from '../../actions';
import { connect } from 'react-redux';
import  FavoriteContainer from "../Favorites/FavoriteContainer";
import { AlbumDetails } from "../../Components/AlbumDetails/AlbumDetails";





const App = ({ logout, error, user, favorites, storeFavorites, albums}) => {
  const sendFavorites = async () => {
    const newFavorites = await getFavorites(user.id)
    storeFavorites(newFavorites)
  } 
  return (
    <>
      <h1>TUNE-IN LATER</h1>
      <NavLink exact to='/search'>Search</NavLink>
      {user && <NavLink exact to='/my-collection' onClick={sendFavorites}>Favorites</NavLink>}
      {user && <NavLink exact to='/' onClick={logout}>LOGOUT</NavLink>}
      {user && <NavLink exact to='/'>Home</NavLink>}
      {!user && <Link  to='/sign-up'><button>Sign Up Page</button></Link>}
      {!user && <Link  to="/login"><button>Login Page</button></Link>}
      <p>{error}</p>
      <Route exact path="/" />
      <Route 
      exact path='/search' 
      component={Search}/>
      <Route 
      exact path='/sign-up' 
      component={SignUpForm} 
      />
      <Route 
      exact path='/my-collection' 
      component = {FavoriteContainer} 
      />
      <Route 
      exact path="/login" 
      component={LoginForm} 
      />
      <Route 
      exact path='/search'
      component= {CardContainer}
      />
      <Route exact path='/:id' render={({match}) => {
        const {id} = match.params;
        const description = albums.find(album => {
          return album.album_id === parseInt(id)
        })
        return description && <AlbumDetails album={description} />
      }}/>
    </>
  );
};




export const mapStateToProps = store => ({
  albums: store.albums,
  error: store.error,
  user: store.user,
  favorites: store.favorites
});


export const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  storeFavorites: (favorites) => dispatch(storeFavorites(favorites))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
