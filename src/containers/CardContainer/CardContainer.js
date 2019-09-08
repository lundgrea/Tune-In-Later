import React from 'react';
import Card from '../../containers/Card/Card';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { toggleFavorite } from '../../actions';
import { AlbumDetails } from '../../Components/AlbumDetails/AlbumDetails';


const CardContainer = ({albums, toggleFavorite, user}) => {
    let cards = albums.map(album => {
    return (
      <NavLink render={()=> <AlbumDetails album={album}/>} key={album.album_id} to={`/${album.album_id}`}>
        <Card 
        {...album}
        toggleFavorite={toggleFavorite}
        user={user}
        key={album.id}
      />
    </NavLink>
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
