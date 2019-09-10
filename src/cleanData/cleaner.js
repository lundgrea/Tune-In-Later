export const cleanAlbums = (albums) => {
  return albums.map(album => ({
    artist_name:  album.artistName,
      album_name:  album.collectionName,
      primary_genre_name:  album.primaryGenreName,
      album_id:  album.collectionId,
      artwork_url:  album.artworkUrl100,
      release_date: album.releaseDate,
      content_advisory_rating: album.contentAdvisoryRating,
      key: album.collectionId,
      isFavorite: false
  }))
}