import React, {Component} from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import { toggleFavorite } from '../../actions';
import PropTypes from 'prop-types'


export class FavoriteContainer extends Component {
  constructor() {
    super()
    this.state = {
      filteredAlbums: [],
      filterButton: '',
      filters: []
    }
  }

  componentDidMount() {
    this.gatherFilters()
  }

  setFilters = (e) => {
    let selected = e.target.value
    let selectedFavorites = this.props.favorites.filter(favorite => favorite.primary_genre_name === selected)
    this.setState({filteredAlbums: selectedFavorites})
  }

  genreFilter = () => {
    return this.state.filteredAlbums.map(favorite => 
      {
      return <Card
        {...favorite}
        toggleFavorite={this.props.toggleFavorite}
        user={this.props.user}
        key={favorite.id}
        isFavorite={true}
      />
    });
  }

  gatherFilters = () => {
    let filters = []
    this.props.favorites.forEach(favorite => {
      if (!filters.includes(favorite.primary_genre_name)) {
        filters.push(favorite.primary_genre_name)
      }
    })
    this.setState({filters})
  }

  populateGenreButtons = () => {
    return this.state.filters.map((genre) => {
      return (
        <>
          <label htmlFor={genre}>{genre}</label>
          <input type="radio" name="genre" value={genre} placeholder="radio buttons" onClick={this.setFilters}></input>
        </>)
      })
  }

  generateAlbums = () => {
    return this.props.favorites.map(favorite => 
      {
          return <Card
            {...favorite}
            toggleFavorite={this.props.toggleFavorite}
            user={this.props.user}
            key={favorite.id}
            isFavorite={true}
          />
      })
  }

  clearInputs = () => {
    this.generateAlbums()
    this.setState({filteredAlbums: [], filterButton: ''})
  } 

  render() {
  return (
    <section>
      <div>
        <fieldset>
          <h3>Filter By Genre</h3>
          <label htmlFor="show all">Show All</label>
          <input
            type="radio"
            name="genre"
            value="show all"
            placeholder="radio buttons"
            onClick={this.clearInputs}
          ></input>
          {this.populateGenreButtons()}
        </fieldset>
      </div>
      <div className="favorites-container">
        {this.state.filteredAlbums.length === 0 && this.generateAlbums()}
        {this.state.filteredAlbums.length > 0 && this.genreFilter()}
      </div>
    </section>
  );
  }
}

const mapStateToProps = store => ({
  user: store.user,
  favorites: store.favorites
})


const mapDispatchToProps = dispatch => ({
  toggleFavorite: (id) => dispatch(toggleFavorite(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(FavoriteContainer)


FavoriteContainer.propTypes = {
  user: PropTypes.object.isRequired,
  favorites: PropTypes.array.isRequired,
  toggleFavorite: PropTypes.func.isRequired
}