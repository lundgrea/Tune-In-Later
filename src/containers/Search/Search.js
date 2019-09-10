import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addAlbums } from '../../actions';
import { getAlbums } from '../../apiCalls/apiCalls';
import { handleErrors } from '../../actions/index';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import { cleanAlbums } from '../../cleanData/cleaner' 

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

  fetchAlbums = (e) => {
    e.preventDefault()
    getAlbums(this.state.search)
    .then(data => cleanAlbums(data.results))
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