import React from 'react'

class GifList extends React.Component {

  render() {

    return (
      <div>
        {this.props.gif}
      </div>
    )
  }

}

export default GifList