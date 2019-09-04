import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addAlbums } from '../../actions'

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

  fetchAlbums = e => {
    e.preventDefault();
    fetch(`https://itunes.apple.com/search?term=${this.state.search}&entity=album`)
    .then(res => res.json())
    // .then(data => console.log(data.results))
    .then(data => this.props.addAlbums(data.results))
    .catch(err => console.log(err))
    this.setState({ search: ''})
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
  addAlbums: albums => dispatch(addAlbums(albums))
})

export default connect(null, mapDispatchToProps)(Search)