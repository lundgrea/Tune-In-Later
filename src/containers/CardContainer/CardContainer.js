import React from 'react';
import Card from '../../containers/Card/Card'
import { connect } from 'react-redux';
import { toggleFavorite } from '../../actions'

const CardContainer = ({albums, toggleFavorite, user}) => {
  console.log(albums)
  let cards
  if(albums !== undefined) {
    cards = albums.map(album => {
    return <Card 
      {...album}
      toggleFavorite={toggleFavorite}
      user={user}
    />
  })
  } else {
    const response = "ENTER AN ARTIST"
    return response
  }


  return (
    <>
    {cards}
    </>
  )
}

const mapStateToProps = store => ({
  albums: store.albums,
  user: store.user
})


const mapDispatchToProps = dispatch => ({
  toggleFavorite: (id) => dispatch(toggleFavorite(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(CardContainer)
