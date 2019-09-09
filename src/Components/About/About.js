import React, { Component } from 'react';
import '../../App.css';
import './About.css';

class About extends Component {

    render() {

        let aboutClass = 'outer-container container-' + this.props.theme;
        let innerClass = 'inner-container inner-' + this.props.theme;

        return (
            <div className={aboutClass} id={this.props.id}>

                <div className={innerClass}>
                    <div className='header-container'>
                        <h2>About</h2>
                    </div>
                    <p>
                        My name is Ryan Slevin and I'm a technical professional who uses code to improve the lives and experiences of my customers. 
                        I'm currently pursuing a BSc Computer Science degree through the University of London, 
                    </p>

                </div>
            </div>

        )
    }

}

export default About;