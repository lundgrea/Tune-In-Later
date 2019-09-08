import React from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import { toggleFavorite } from '../../actions';


const FavoriteContainer = ({toggleFavorite, user, favorites, dataType }) => {
  console.log('favorites', favorites)
    let cards = favorites.map(favorite => 
      {
      return <Card
        {...favorite}
        toggleFavorite={toggleFavorite}
        user={user}
        key={favorite.id}
        isFavorite={true}
      />
    });
 

  return (
    <>
      {cards}
    </>
  )
}

const mapStateToProps = store => ({
  user: store.user,
  favorites: store.favorites
})


const mapDispatchToProps = dispatch => ({
  toggleFavorite: (id) => dispatch(toggleFavorite(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(FavoriteContainer)
