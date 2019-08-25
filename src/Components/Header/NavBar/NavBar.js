import React from 'react'
import NavButton from './NavButton/NavButton'

function NavBar(props) {

        const style = {
            columnCount: 3,
        }

    return (
        <div style={style}>
            <NavButton name="Education" handlePageChange={props.handlePageChange}/>
            <NavButton name="Projects" handlePageChange={props.handlePageChange}/>
            <NavButton name="Contact" handlePageChange={props.handlePageChange}/>
        </div>
    )

    }

export default NavBar;