import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addAlbums } from '../../actions';
import { getAlbums } from '../../apiCalls/apiCalls';
import { handleErrors } from '../../actions/index';
import { getFavorites } from '../../apiCalls/apiCalls';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

export class Search extends Component {
  constructor(){
    super();
    this.state = {
      search: ''
    }
  }

  handleChange = e => {
    this.setState({search: e.target.value})
  }

  checkFavorites = async () => {
    const userFavorites = await getFavorites(this.props.user.id)
    const favoritesObject = userFavorites.includes(favorite => favorite.album_id === this.props.album_id)
    return favoritesObject
  }

  fetchAlbums = (e) => {
    e.preventDefault()
    getAlbums(this.state.search)
    .then(data => data.results.map(result => ({
      artist_name:  result.artistName,
      album_name:  result.collectionName,
      primary_genre_name:  result.primaryGenreName,
      album_id:  result.collectionId,
      artwork_url:  result.artworkUrl100,
      release_date: result.releaseDate,
      content_advisory_rating: result.contentAdvisoryRating,
      key: result.collectionId,
      isFavorite: false
    })))
    .then(data => this.props.addAlbums(data))
    .catch(err => console.log(err))
    this.setState({ search: ''})
    this.props.handleErrors('')
    
  }

  render() {
      return (
        <form>
          <input
            type="text"
            placeholder="Input Artist Name To Search"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <Link to='/'>
            <button onClick={this.fetchAlbums}>SEARCH</button>
          </Link>
        </form>
      )
  }
}

const mapStateToProps = store => ({
  albums: store.albums,
  user: store.user
})

const mapDispatchToProps = dispatch => ({
  addAlbums: albums => dispatch(addAlbums(albums)),
  handleErrors: (error) => dispatch(handleErrors(error))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)

Search.propTypes = {
  albums: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  addAlbums: PropTypes.func.isRequired,
  handleErrors: PropTypes.func.isRequired
}