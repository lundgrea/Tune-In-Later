import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addAlbums } from '../../actions';
import { getAlbums } from '../../apiCalls/apiCalls';
import { handleErrors } from '../../actions/index';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
<<<<<<< HEAD
import './Search.css'
=======
import { cleanAlbums } from '../../cleanData/cleaner' 
>>>>>>> master

export class Search extends Component {
  constructor(){
    super();
    this.state = {
      search: '',
      error: ''
    }
  }

  handleChange = e => {
    this.setState({search: e.target.value})
  }

  fetchAlbums = async (e) => {
    e.preventDefault()
    try {
      const allAlbums = await getAlbums(this.state.search)
      const cleanedAlbums = cleanAlbums(allAlbums.results)
      this.props.addAlbums(cleanedAlbums)
    } catch(error) {
      this.setState({error: 'Please Try Again'})
    }
    this.setState({ search: ''})
    this.props.handleErrors('')
  }

  render() {
      return (
<<<<<<< HEAD
        <form className="search-form-inner"> 
=======
        <div>
          {this.state.error}
        <form>
>>>>>>> master
          <input
            className="search-input"
            type="text"
            placeholder="Input Artist Name To Search"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <Link to='/'>
            <button className="search-button" onClick={this.fetchAlbums}>search</button>
          </Link>
        </form>
        </div>
      )
  }
}

export const mapStateToProps = store => ({
  albums: store.albums,
  user: store.user
});

export const mapDispatchToProps = dispatch => ({
  addAlbums: albums => dispatch(addAlbums(albums)),
  handleErrors: (error) => dispatch(handleErrors(error))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search)

Search.propTypes = {
  albums: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  addAlbums: PropTypes.func.isRequired,
  handleErrors: PropTypes.func.isRequired
}