import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addAlbums } from '../../actions'
import { getAlbums } from '../../apiCalls/apiCalls'
import { handleErrors } from '../../actions/index'


class Search extends Component {
  constructor(){
    super();
    this.state = {
      search: ''
    }
  }

  handleChange = e => {
    this.setState({search: e.target.value})
  }

  fetchAlbums = (e) => {
    e.preventDefault()
    getAlbums(this.state.search)
    .then(data => data.results.map(result => ({
      artist:  result.artistName,
      albumName:  result.collectionName,
      genre:  result.primaryGenreName,
      id:  result.collectionId,
      img:  result.artworkUrl100,
      key:  result.collectionId,
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
          <button onClick={this.fetchAlbums}>SEARCH</button>
        </form>
      )
  }
}

const mapDispatchToProps = dispatch => ({
  addAlbums: albums => dispatch(addAlbums(albums)),
  handleErrors: (error) => dispatch(handleErrors(error))
})

export default connect(null, mapDispatchToProps)(Search)