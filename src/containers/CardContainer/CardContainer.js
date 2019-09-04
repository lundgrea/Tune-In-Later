import React from 'react';
import Card from '../../components/Card/Card'
import { connect } from 'react-redux';


const CardContainer = ({albums}) => {
  let cards
  if(albums !== undefined) {
    cards = albums.map(album => {
    return <Card 
      artist={album.artistName}
      albumName={album.collectionName}
      genre={album.primaryGenreName}
      id={album.collectionId}
      img={album.artworkUrl100}
      key={album.collectionId}
      isFavorite={album.isFavorite}
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

const mapStateToProps = (store) => ({
  albums: store.albums
})



export default connect(mapStateToProps)(CardContainer)
