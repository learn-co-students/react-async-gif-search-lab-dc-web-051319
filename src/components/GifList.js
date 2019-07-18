import React from "react"

function renderImages(gifs) {
    return gifs.map(gif => {
        return (
            <img className="img-thumbnail" key={gif.id} src={gif.images.fixed_height.url} />
        )
    })
}

function GifList(props) {
    console.log(props.gifs)
    return (
        <div className="d-flex flex-wrap justify-content-center">{renderImages(props.gifs)}</div>
    )
}

export default GifList