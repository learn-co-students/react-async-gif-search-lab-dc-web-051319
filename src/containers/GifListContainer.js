import React from 'react'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {

  state = {
    allGifs: null
  }

  componentDidMount() {
    fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
    .then(resp => resp.json())
    .then(data => this.setState({allGifs: data}))
  }

  render () {
    return (
      this.state.allGifs.data.map(gif => 
        <GifList key={gif.id} gif={gif.images.original.url} />
      )
    )
  }

}

export default GifListContainer