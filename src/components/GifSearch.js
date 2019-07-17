import React from 'react'

class GifSearch extends React.Component {
    state = {
        searchInput: ""
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state.searchInput)
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="search"
                    value={this.state.searchInput}
                    onChange={(event) => this.setState({searchInput: event.target.value})}
                />
                <input 
                    type="submit"
                    value="submit"
                />
            </form>
        )
    }
}

export default GifSearch