import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  state = {
    gifs: [],
    numGifs: 3,
    query: ""
  }

  render() {
    return (
      <div className="container-fluid">
        <GifSearch handleSubmit={this.handleSubmit} />
        <GifList gifs={this.state.gifs}  />
      </div>
    ) 
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState ({
      query: event.target.querySelector('input[type="text"]').value
    })
  }

  fetchImages() {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g&limit=${this.state.numGifs}`)
    .then(r => r.json())
    .then(result => {
      this.setState({ gifs: result.data })
    })
  }

  componentDidUpdate() {
      this.fetchImages()
  }

}

export default GifListContainer