import React from 'react'
import './Card.css'
import { connect } from 'react-redux';
// import { toggleFavorite } from '../../actions'


const Card = props => {
  console.log('Card Component props', props.isFavorite)
  const favStar = props.isFavorite ? "https://image.flaticon.com/icons/svg/148/148836.svg" : "https://image.flaticon.com/icons/svg/149/149217.svg"
  return (
    <>
    <h2>{props.artist}</h2>
    <p>{props.albumName}</p>
    <p>{props.genre}</p>
    <img src={props.img} alt=''></img>
    <img onClick={() => props.toggleFavorite(props.id)} className="card__button-fav" src={favStar} alt=''/>
    </>
  )
}

// const mapDispatchToProps = dispatch => ({
//   toggleFavorite: id => dispatch(toggleFavorite(id))
// })

export default Card;