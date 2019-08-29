import React from 'react';
import NavButton from './NavButton/NavButton';
import './NavBar.css';

import { Link } from 'react-scroll';

function NavBar(props) {


    return (
        <div className='nav-bar'>
            <Link to='educationContainer' spy={true} smooth={true} duration={500}>Education</Link>
            <Link to='projectsContainer' spy={true} smooth={true} duration={500}>Projects</Link>
            <Link to='contactContainer' spy={true} smooth={true} duration={500}>Contact</Link>
        </div>
    )

    }

export default NavBar;