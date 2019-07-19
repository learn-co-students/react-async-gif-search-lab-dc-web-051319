// Functional doesn't get re-rendered for some reason
// function renderImages(gifs) {
//     return gifs.map(gif => {
//         return (
//             <img className="img-thumbnail" key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
//         )
//     })
// }

// function GifList(props) {
//     console.log(props.gifs)
//     return (
//         <div className="d-flex flex-wrap justify-content-center">{renderImages(props.gifs)}</div>
//     )
// }

import React from "react";

class GifList extends React.Component {
    renderImages(gifs) {
         return gifs.map(gif => {
            return (
                <a  key={gif.id} href={gif.url}>
                    <img className="img-thumbnail" src={gif.images.fixed_height.url} alt={gif.title} />
                </a>
             )
    })
}

    render() {
        return (
            <div className="d-flex flex-wrap justify-content-center">{this.renderImages(this.props.gifs)}</div>
        )
    }
}

export default GifList