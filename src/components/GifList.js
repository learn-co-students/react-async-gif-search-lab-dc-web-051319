import React from 'react'

class GifList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.gifs.map(gif => {
                    return <li key={gif.images.original.url}><img src={gif.images.original.url} alt=""/></li>
                })}
            </ul>
        )
    }
}

export default GifList