import React from 'react'

const GifList =(props) => {
  return (
    <ul className="list-inline row">
      {props.gifs.map(gif => {
        return (
          <li key={gif.id} className="col-xs-4">
            <img src={gif.images.original.url} alt={gif.title} className="img-responsive" />
          </li>)
      })}
    </ul>
  )
}

export default GifList