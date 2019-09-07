import React from 'react';
import Card from '../../containers/Card/Card'
import { connect } from 'react-redux';
import { toggleFavorite } from '../../actions'

const CardContainer = ({albums, toggleFavorite, user, favorites, dataType}) => {
  console.log(dataType)
  console.log(favorites)
  let cards
  if(dataType === 'albums') {
    console.log('album hey')
    cards = albums.map(album => {
    return <Card 
      {...album}
      toggleFavorite={toggleFavorite}
      user={user}
      key={album.id}
    />
  })
  } else if (dataType === 'favorites') {
    console.log('favorites hey')
    cards = favorites.map(favorite => {
      return <Card
        {...favorite}
        toggleFavorite={toggleFavorite}
        user={user}
        key={favorite.id}
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
  user: store.user,
  favorites: store.favorites
})


const mapDispatchToProps = dispatch => ({
  toggleFavorite: (id) => dispatch(toggleFavorite(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(CardContainer)
