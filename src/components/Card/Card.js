import React from 'react'
import { handleErrors } from '../../actions/index'
import { connect } from 'react-redux'
import './Card.css'



const Card = props => {
  console.log(props)
  let actionObject;
  const favStar = props.isFavorite ? "https://image.flaticon.com/icons/svg/148/148836.svg" : "https://image.flaticon.com/icons/svg/149/149217.svg"
  if (!props.user){
    actionObject = () => props.handleErrors('Log In To Save Your Albums to Favorites')
  } else {
    actionObject = () => props.toggleFavorite(props.id)
  }
  return (
    <>
    <h2>{props.artist}</h2>
    <p>{props.albumName}</p>
    <p>{props.genre}</p>
    <img src={props.img} alt=''></img>
    <img onClick={actionObject} className="card__button-fav" src={favStar} alt=''/>
    </>
  )
}

export const mapDispatchToProps = dispatch => ({
  handleErrors: (error) => dispatch(handleErrors(error))
})

export default connect(null, mapDispatchToProps)(Card);