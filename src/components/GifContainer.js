import React from "react";
import GifList from "./GifList";
import NavBar from './NavBar'


class GifContainer extends React.Component {
    state = {
        gifs: [],
        search: "success"
    }

    getGifs = () => {
        const URL = `http://api.giphy.com/v1/gifs/search?q=` +
            `${this.state.search}` +
            `&api_key=dc6zaTOxFJmzC&rating=g` 
        fetch(URL)
            .then(response => response.json())
            .then(obj => {
                this.setState({
                    gifs: obj.data
                })
            });
    }

    onSearch = (search) => {
        this.setState({
            search: search
        })
        this.getGifs()
    }

    componentDidMount() {
        this.getGifs()
    }

    render() {
        return (
            <React.Fragment>
                < NavBar title="Giphy Search" onSearch={this.onSearch} />
                < GifList gifs={this.state.gifs} />
            </React.Fragment>
        )
    }
}

export default GifContainer