import React from 'react';
import { Link } from 'react-router-dom';

export const AlbumDetails = ({album}) => {
  console.log(album)
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
