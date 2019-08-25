import React, { Component } from 'react'

import NavBar from './NavBar/NavBar'
import Title from './Title/Title'

class Header extends Component {

    render() {

        const style = {
            columnCount: 2
        }
        return(
        <div style={style}>
            <Title />
            <NavBar handlePageChange={this.props.handlePageChange}/>
        </div>
        )

    }

}

export default Header;