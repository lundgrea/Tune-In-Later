import React from 'react';
import Card from '../../components/Card/Card'
import { connect } from 'react-redux';
import { toggleFavorite, loginCheck } from '../../actions'


const CardContainer = ({albums, toggleFavorite, loginCheck, user}) => {
  let cards
  if(albums !== undefined) {
    cards = albums.map(album => {
    return <Card 
      {...album}
      loginCheck={loginCheck}
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
