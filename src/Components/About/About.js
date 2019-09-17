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
                    <div className='about-content'>
                    </div>
                    <p>
                        My name is Ryan Slevin and I'm a technical professional who uses code to improve the lives and experiences of my customers.
                        I'm currently pursuing a <a href='https://london.ac.uk/courses/computer-science'>BSc Computer Science</a> degree
                        while working on personal projects and contributing to open source to grow my skills and give back to the developer community.
                    </p>
                    <div className='skills-container'>
                        <div className='skill-column'>
                            <h5>Languages:</h5>
                            <ul>
                                <li>Java</li>
                                <li>Python</li>
                                <li>MySQL/T-SQL</li>
                                <li>JavaScript</li>
                                <li>HTML/CSS</li>
                            </ul>
                        </div>
                        <div className='skill-column'>
                            <h5>Frameworks:</h5>
                            <ul>
                                <li>Spring Boot</li>
                                <li>Hibernate</li>
                                <li>React</li>
                            </ul>
                        </div>
                        <div className='skill-column'>
                            <h5>Tools:</h5>
                            <ul>
                                <li>Visual Studio Code</li>
                                <li>AWS Amplify</li>
                                <li>Debuggers</li>
                            </ul>
                        </div>
                        <div className='skill-column'>
                            <h5>Knowledge:</h5>
                            <ul>
                                <li>Object Oriented Programming</li>
                                <li>Algorithms and Data Structures</li>
                                <li>RESTful API Design and Creation</li>
                                <li>Database Design and Management</li>
                                <li>Service Oriented Architecture</li>
                            </ul>
                        </div>
                    </div>


                </div>
            </div>

        )
    }

}

export default About;