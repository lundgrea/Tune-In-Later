import React from 'react'
import { handleErrors, storeFavorites } from '../../actions/index'
import { connect } from 'react-redux'
import { postFavorite, getFavorites, deleteFavorite } from '../../apiCalls/apiCalls'
import './Card.css'
import PropTypes from 'prop-types'



export const Card = props => {
 
  const albumToPost = {
    album_id: props.album_id,
    artist_name: props.artist_name,
    album_name: props.album_name,
    artwork_url: props.artwork_url,
    release_date: props.release_date,
    content_advisory_rating: props.content_advisory_rating || 'Everybody',
    primary_genre_name: props.primary_genre_name
  }

  const favStar = props.isFavorite ? "https://image.flaticon.com/icons/svg/148/148836.svg" : "https://image.flaticon.com/icons/svg/149/149217.svg"


  const user2Favorites = async () => {
    const userFavorites = await getFavorites(props.user.id)
    return userFavorites.find(favorite => favorite.album_id === props.album_id)
  }
  
  const toggleUserFavorites = async (userFavorites) => {
    if (userFavorites) {
      props.toggleFavorite(userFavorites.album_id);
      await deleteFavorite(props.user.id, props.album_id)
      const something = props.favorites.filter(favorite => {
        return favorite.album_id !== props.album_id
      })
      props.storeFavorites(something)
    } 
    if (!userFavorites) {
      props.toggleFavorite(props.album_id);
      await postFavorite(props.user.id, albumToPost);
      const newFavorites = await getFavorites(props.user.id)
      await props.storeFavorites(newFavorites)
    }
  }
  
  const check2Fav = async () => {
  if (!props.user){
    props.handleErrors("Log In To Save Your Albums to Favorites");
  } else {
    let userFavorites = await user2Favorites()
    toggleUserFavorites(userFavorites)
    }
  }
  
  return (
    <div>
      <div className='images'>
        <img onClick={check2Fav} className="card__button-fav" src={favStar} alt=''/>
      </div>
      <h2>{props.artist_name}</h2>
        <img src={props.artwork_url} alt=''></img>
      <p>{props.album_name}</p>
      <p>{props.primary_genre_name}</p>
    </div>
  )
  }

export const mapStateToProps = store => ({
  favorites: store.favorites
})

export const mapDispatchToProps = dispatch => ({
  handleErrors: (error) => dispatch(handleErrors(error)),
  storeFavorites: (favorites) => dispatch(storeFavorites(favorites))
})


export default connect(mapStateToProps, mapDispatchToProps)(Card);

Card.propTypes = { 
  album_id: PropTypes.number.isRequired,
  album_name: PropTypes.string.isRequired,
  artist_name: PropTypes.string.isRequired,
  artwork_url: PropTypes.string.isRequired,
  content_advisory_rating: PropTypes.string,
  handleErrors: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  primary_genre_name: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  storeFavorites: PropTypes.func.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  favorites: PropTypes.array.isRequired
}
