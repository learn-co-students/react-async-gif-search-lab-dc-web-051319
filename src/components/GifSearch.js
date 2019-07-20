import React from 'react'

const GifSearch = (props, state) => {
  return (
    <div className="row">
      <form onSubmit={props.handleSubmit} className="col-xs-12">
        <div className="form-group">
          <label htmlFor="search-field">Search for GIFs</label><br />
          <input type="text" className="form-control" id="search-field" />
          <input type="submit" className="form-control btn btn-primary" value="Search"/>
          {/* <input type="range" className="form-control" defaultValue={props.numGifs} onChange={props.handleSlide} min="0" max="12" step="1" /> */}
        </div>
      </form>
    </div>
  )
}

export default GifSearch