import React, {Component} from 'react';

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
    .then(data => console.log(data))
    // this.setState({ search: ''})
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

export default Search