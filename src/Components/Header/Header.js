import React from 'react';

import NavBar from './NavBar/NavBar';
import Title from './Title/Title';
import './Header.css';

function Header(props){

    return(
        <div className='header'>
            <Title />
            <NavBar handlePageChange={props.handlePageChange}/>
        </div>
        )

    }

export default Header;