import React from 'react'
import GifSearch from '../components/GifSearch'
import GifiList from '../components/GifList'

class GifListContainer extends React.Component {
    state = {
        gifs: []
    }

    componentDidMount() {
        this.fetchGifs('dog')
    }

    fetchGifs = (searchInput) => {
        const search = searchInput
        const URL = 'http://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=dc6zaTOxFJmzC&rating=g'
        fetch(URL)
        .then(resp => resp.json())
        .then(gifs => {
                this.setState({gifs: gifs.data.slice(0,3)}
            )})
    }

    handleSubmit = (searchInput) => {
        this.fetchGifs(searchInput)
    }

    render() {
        return (
            <div className='row'>
                <div className="col-sm-8">
                    <GifiList gifs={this.state.gifs}/>
                </div>
                <div className="col-sm-4">
                    <GifSearch handleSubmit={this.handleSubmit}/>
                </div>
            </div>
        )
    }
}

export default GifListContainer