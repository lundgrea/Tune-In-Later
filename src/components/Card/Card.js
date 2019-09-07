import React from 'react'
import { handleErrors } from '../../actions/index'
import { connect } from 'react-redux'
import { postFavorite } from '../../apiCalls/apiCalls'
import './Card.css'



const Card = props => {
  let actionObject;
  const favePost = () => {
    postFavorite(props.user.id, albumToPost)
  }

  const albumToPost = {
    album_id: props.album_id,
    artist_name: props.artist_name,
    album_name: props.album_name,
    artwork_url: props.artwork_url,
    release_date: props.release_date,
    content_advisory_rating: props.content_advisory_rating,
    primary_genre_name: props.primary_genre_name
  }

  const favStar = props.isFavorite ? "https://image.flaticon.com/icons/svg/148/148836.svg" : "https://image.flaticon.com/icons/svg/149/149217.svg"
  if (!props.user){
    actionObject = () => props.handleErrors('Log In To Save Your Albums to Favorites')
  } else {
    actionObject = () => {
      props.toggleFavorite(props.album_id)
      favePost()
    }
  }

  return (
    <>
    <h2>{props.artist_name}</h2>
    <p>{props.album_name}</p>
    <p>{props.primary_genre_name}</p>
    <img src={props.artwork_url} alt=''></img>
    <img onClick={actionObject} className="card__button-fav" src={favStar} alt=''/>
    </>
  )
}

export const mapDispatchToProps = dispatch => ({
  handleErrors: (error) => dispatch(handleErrors(error))
})

export default connect(null, mapDispatchToProps)(Card);