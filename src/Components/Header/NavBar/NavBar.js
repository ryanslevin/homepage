import React from 'react'
import NavButton from './NavButton/NavButton'
import './NavBar.css'

function NavBar(props) {

    return (
        <div className='nav-bar'>
            <NavButton name="Education" handlePageChange={props.handlePageChange}/>
            <NavButton name="Projects" handlePageChange={props.handlePageChange}/>
            <NavButton name="Contact" handlePageChange={props.handlePageChange}/>
        </div>
    )

    }

export default NavBar;