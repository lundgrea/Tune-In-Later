import React from 'react'

const Card = props => {
  return (
    <>
    <h2>{props.artist}</h2>
    <p>{props.albumName}</p>
    <p>{props.genre}</p>
    <img src={props.img}></img>
    </>
  )
}

export default Card