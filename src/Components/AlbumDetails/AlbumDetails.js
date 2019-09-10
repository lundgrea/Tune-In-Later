import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

export const AlbumDetails = ({album}) => {
  return(
    <div>
    <article>
      <h2>{album.artist_name}</h2>
      <p>{album.album_name}</p>
      <p>{album.primary_genre_name}</p>
      <img src={album.artwork_url} alt=''></img>
    </article>
      <Link to='/search'>BACK</Link>
    </div>
  )
}

AlbumDetails.propTypes = {
  album: PropTypes.object.isRequired
}
