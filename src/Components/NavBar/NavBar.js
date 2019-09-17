import React, { Component } from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-scroll';

class NavBar extends Component {

    state = {
        activeContainer: 'homeContainer'
    }

    //Set activeContainer after nav button is pressed
    handleContainerChange(newContainer) {
        this.setState({
            activeContainer: newContainer
        })
    }

    render() {

        let navBarClass = 'nav-bar nav-bar-' + this.props.theme
        let homeLinkClass = 'nav-btn nav-btn-' + this.props.theme
        let aboutLinkClass = 'nav-btn nav-btn-' + this.props.theme
        let projectsLinkClass = 'nav-btn nav-btn-' + this.props.theme
        let contactLinkClass = 'nav-btn nav-btn-' + this.props.theme


        //Determines which nav button to make active based on state of activeContainer
        if (this.state.activeContainer === 'homeContainer') {
            homeLinkClass = 'nav-btn-active-' + this.props.theme
        } else if (this.state.activeContainer === 'aboutContainer') {
            aboutLinkClass = 'nav-btn-active-' + this.props.theme
        } else if (this.state.activeContainer === 'projectsContainer') {
            projectsLinkClass = 'nav-btn-active-' + this.props.theme
        } else if (this.state.activeContainer === 'contactContainer') {
            contactLinkClass = 'nav-btn-active-' + this.props.theme
        }

        let icon = null;

        //Switching which icon (moon/sun) is shown based on theme
        if (this.props.theme === 'light') {
            icon = <FontAwesomeIcon icon={faMoon} onClick={this.props.handleThemeChange(this.event)}/>
        }else {
            icon = <FontAwesomeIcon icon={faSun} onClick={this.props.handleThemeChange(this.event)}/>
        }

        return (
            <div className={navBarClass}>
                <Link className={homeLinkClass} to='homeContainer'
                    spy={true} smooth={true} duration={500} onClick={() => this.handleContainerChange('homeContainer')}>Home</Link>
                <Link className={aboutLinkClass} to='aboutContainer'
                    spy={true} smooth={true} duration={500} onClick={() => this.handleContainerChange('aboutContainer')}>About</Link>
                <Link className={projectsLinkClass} to='projectsContainer'
                    spy={true} smooth={true} duration={500} onClick={() => this.handleContainerChange('projectsContainer')}>Projects</Link>
                <Link className={contactLinkClass} to='contactContainer'
                    spy={true} smooth={true} duration={500} onClick={() => this.handleContainerChange('contactContainer')}>Contact</Link>
                {icon}
            </div>
        )
    }

}

export default NavBar;