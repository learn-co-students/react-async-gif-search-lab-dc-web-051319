import React from "react"

function handleSubmit(event, props) {
    event.preventDefault()
    props.onSearch(event.target[0].value)
}

function GifSearch(props){
    return (
        <form className="form-inline my-2 my-lg-0" onSubmit={(event) => handleSubmit(event, props)}>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    )
}

export default GifSearch