import React from "react";
import Search from "../Search/Search";
import "./App.css";
import { getFavorites } from "../../apiCalls/apiCalls";
import { Route, NavLink, Link } from "react-router-dom";
import CardContainer from "../CardContainer/CardContainer";
import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import { logout, storeFavorites } from "../../actions";
import { connect } from "react-redux";
import  FavoriteContainer from "../Favorites/FavoriteContainer";
import { AlbumDetails } from "../../Components/AlbumDetails/AlbumDetails";
import PropTypes from "prop-types"




export const App = ({ logout, error, user, storeFavorites, albums}) => {
  const sendFavorites = async () => {
    const something = await getFavorites(user.id)
    const newFavorites = something.map(album => ({
      ...album, isFavorite: true
    }))
    storeFavorites(newFavorites)
  } 
  return (
  <main>
    <section>
      <nav>
        <div className="logo-lockup">
          <img className="logo" src="https://image.flaticon.com/icons/svg/126/126508.svg" alt="logo"></img>
          <h1>TUNE-IN LATER</h1>
        </div>
        <div className="login-div">
          {error && <p className="error">{error}</p>}
          {!user && <Link  to="/sign-up" className="nav-links">New User</Link>}
          {!user && <Link  to="/login" className="nav-links">Login</Link>}
          {user && <NavLink exact to="/my-collection" onClick={sendFavorites} className="nav-links">Favorites</NavLink>}
          {user && <NavLink exact to="/" className="nav-links">Home</NavLink>}
        </div>
      </nav>
      <article className="main-container">
        <article className="search-form">
          <div className="search-form-container">
          <NavLink exact to="/search" className="a-search">Search Tunes</NavLink>
          <Route 
          exact path="/search" 
          component={Search}/>
          </div>
          {user && <NavLink className='logout-link' exact to="/" onClick={logout}>LOGOUT</NavLink>}
        </article>
        <section className="login-form-container">
          <Route exact path="/" />
          <Route 
          exact path="/login" 
          component={LoginForm} 
          />
          <Route 
          exact path="/sign-up"
          component={SignUpForm} 
          />
          <div className="favorites-container">
            <Route 
            exact path="/my-collection" 
            component = {FavoriteContainer} 
            />
            <Route 
            exact path="/search"
            component= {CardContainer}
            />
            <Route 
            exact path="/:id" 
            render={({match}) => {
              const {id} = match.params;
              const description = albums.find(album => {
              return album.album_id === parseInt(id)
              })
            return description && <AlbumDetails album={description} />
            }}
            />
          </div>
        </section>
      </article>
    </section>
  </main>
  );
};




export const mapStateToProps = store => ({
  albums: store.albums,
  error: store.error,
  user: store.user,
});


export const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  storeFavorites: (favorites) => dispatch(storeFavorites(favorites))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


App.propTypes = {
  albums: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  storeFavorites: PropTypes.func.isRequired
}