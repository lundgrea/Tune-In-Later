import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

export const AlbumDetails = ({album}) => {
  console.log(album)
  return(
    <article className='details-container'>
      <div className='details'>
        <h1>{album.artist_name}</h1>
        <img src={album.artwork_url} alt=''></img>
        <p> Album: {album.album_name}</p>
        <p>Release Date: {album.release_date}</p>
        <p>Genre: {album.primary_genre_name}</p>
      </div>
      <Link className='detail-button' to='/search'>BACK</Link>
      
    </article>
  )
}

AlbumDetails.propTypes = {
  album: PropTypes.object.isRequired
}
