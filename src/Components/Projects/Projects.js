import React, { Component } from 'react';
import './Projects.css'
import '../../App.css'
import Carousel from './Carousel/Carousel'

class Projects extends Component {


    render() {

        let projectsClass = 'outer-container container-'+this.props.theme;
        let innerClass='inner-container inner-'+this.props.theme;

        return (
            <div className={projectsClass} id={this.props.id}>
                <div className={innerClass}>
                <h2>Projects</h2>
                <Carousel theme={this.props.theme}/>
               </div>
            </div>
        )
    }

}

export default Projects;