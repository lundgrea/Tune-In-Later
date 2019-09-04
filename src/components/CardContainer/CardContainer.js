import React from 'react';
import Card from '../Card/Card'
import { connect } from 'react-redux';


const CardContainer = (props) => {
  let cards
  if(props.albums !== undefined) {
    cards = props.albums.map(album => {
    return <Card 
      artist={album.artistName}
      albumName={album.collectionName}
      genre={album.primaryGenreName}
      id={album.collectionId}
      img={album.collectionViewUrl}
      key={album.collectionId}
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
