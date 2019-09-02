import React, { Component } from 'react';
import './NavBar.css';

import { Link } from 'react-scroll';

class NavBar extends Component {

    state = {
        activeContainer: 'homeContainer'
    }

    handleContainerChange(newContainer) {
        this.setState({
            activeContainer: newContainer
        })
    }

    render() {


        let homeLinkClass = 'nav-btn'
        let educationLinkClass = 'nav-btn'        
        let projectsLinkClass = 'nav-btn'
        let contactLinkClass = 'nav-btn'

        if (this.state.activeContainer === 'homeContainer') {
            homeLinkClass = 'nav-btn-active'
        } else if (this.state.activeContainer === 'educationContainer') {
            educationLinkClass = 'nav-btn-active'
        } else if (this.state.activeContainer === 'projectsContainer') {
            projectsLinkClass = 'nav-btn-active'
        } else if (this.state.activeContainer === 'contactContainer') {
            contactLinkClass = 'nav-btn-active'
        }

    return (
        <div className='nav-bar'>
            <div>
            <Link className={homeLinkClass} to='homeContainer'
                spy={true} smooth={true} duration={500} onClick={() => this.handleContainerChange('homeContainer')}>Home</Link>
                </div>
            <div>
            <Link className={educationLinkClass} to='educationContainer'
                spy={true} smooth={true} duration={500} onClick={() => this.handleContainerChange('educationContainer')}>Education</Link>
                </div>
            <div>
            <Link className={projectsLinkClass} to='projectsContainer'
                spy={true} smooth={true} duration={500} onClick={() => this.handleContainerChange('projectsContainer')}>Projects</Link>
                </div>
            <div>
            <Link className={contactLinkClass} to='contactContainer'
                spy={true} smooth={true} duration={500} onClick={() => this.handleContainerChange('contactContainer')}>Contact</Link>
                </div>
        </div>
    )
    }

}

export default NavBar;