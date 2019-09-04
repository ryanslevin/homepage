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

        let navBarClass = 'nav-bar nav-bar-'+this.props.theme


        let homeLinkClass = 'nav-btn nav-btn-'+this.props.theme
        let resumeLinkClass = 'nav-btn nav-btn-'+this.props.theme    
        let projectsLinkClass = 'nav-btn nav-btn-'+this.props.theme
        let contactLinkClass = 'nav-btn nav-btn-'+this.props.theme

        if (this.state.activeContainer === 'homeContainer') {
            homeLinkClass = 'nav-btn nav-btn-active-'+this.props.theme
        } else if (this.state.activeContainer === 'resumeContainer') {
            resumeLinkClass = 'nav-btn nav-btn-active-'+this.props.theme
        } else if (this.state.activeContainer === 'projectsContainer') {
            projectsLinkClass = 'nav-btn nav-btn-active-'+this.props.theme
        } else if (this.state.activeContainer === 'contactContainer') {
            contactLinkClass = 'nav-btn nav-btn-active-'+this.props.theme
        }

    return (
        <div className={navBarClass}>
            <Link className={homeLinkClass} to='homeContainer'
                spy={true} smooth={true} duration={500} onClick={() => this.handleContainerChange('homeContainer')}>Home</Link>
            <Link className={resumeLinkClass} to='resumeContainer'
                spy={true} smooth={true} duration={500} onClick={() => this.handleContainerChange('resumeContainer')}>Resume</Link>
            <Link className={projectsLinkClass} to='projectsContainer'
                spy={true} smooth={true} duration={500} onClick={() => this.handleContainerChange('projectsContainer')}>Projects</Link>
            <Link className={contactLinkClass} to='contactContainer'
                spy={true} smooth={true} duration={500} onClick={() => this.handleContainerChange('contactContainer')}>Contact</Link>
                    <select name='themes' onChange={this.props.handleThemeChange(this.event)}>
                        <option value='minimalist'>Minimalist</option>
                        <option value='synthwave'>Synthwave</option>
                        <option value='vaporwave'>Vaporwave</option>
                    </select>
        </div>
    )
    }

}

export default NavBar;