import React from 'react';
import Card from '../../containers/Card/Card';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { toggleFavorite } from '../../actions';


const CardContainer = ({albums, toggleFavorite, user, favorites, dataType}) => {
    let cards = albums.map(album => {
    return (
      <Link key={album.album_id} to={`/${album.album_id}`}>
        <Card 
        {...album}
        toggleFavorite={toggleFavorite}
        user={user}
        key={album.id}
      />
    </Link>
    )
  });

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
