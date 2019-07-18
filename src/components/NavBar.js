import React from 'react'
import GifSearch from './GifSearch';

function NavBar(props){
    return (
        <nav className={`navbar navbar-expand-lg navbar-light bg-light`}>
            <a className='navbar-brand mr-auto'>
                { props.title }
            </a>
            < GifSearch onSearch={props.onSearch} />
        </nav>
    )
}

export default NavBar
