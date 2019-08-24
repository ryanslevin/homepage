import React, { Component } from 'react'
import NavButton from './NavButton/NavButton'

class NavBar extends Component {

    render() {
    return (
        <div>
            <NavButton name="Resume" changeWord={this.props.changeWord}/>
            <NavButton name="LinkedIn" changeWord={this.props.changeWord}/>
        </div>
    )

    }

}

export default NavBar;