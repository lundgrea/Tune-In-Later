import React from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import { toggleFavorite } from '../../actions';


const FavoriteContainer = ({toggleFavorite, user, favorites, dataType }) => {
  console.log('favorites', favorites)
  let filters = [];
  favorites.forEach(genre => {
    if(!filters.includes(genre.primary_genre_name)){
      filters.push(genre.primary_genre_name)
    }
  })
  let genreNodes = filters.map((genre) => {
  return (
    <>
      <label for={genre}>{genre}</label>
      <input type="radio" name="genre" value={genre} placeholder="radio buttons"></input>
    </>)
  })
  console.log('filter', filters)
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
    <section>
      <div>
        <fieldset>
          <h3>Filter By Genre</h3>
          {genreNodes}
        </fieldset>
      </div>
      {cards}
    </section>
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
