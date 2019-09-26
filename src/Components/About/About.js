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
                <h2>Hi, my name is Ryan.</h2>
                    <div className='about-content'>
                        <p>
                            I'm a highly technical administrative professional who uses my passion for code to improve the lives and experiences of my customers.
                        I'm currently pursuing a <a className='school-link' href='https://london.ac.uk/courses/computer-science'>BSc Computer Science</a> degree
                            while developing personal projects and contributing to open source initiatives.
                    </p>
                        <p>

                        </p>
                        <br></br>
                        <div className='skills-container'>
                            <div className='skill-column'>
                                <h5>Languages:</h5>
                                <ul className='skill-list'>
                                    <li>Java</li>
                                    <li>Python</li>
                                    <li>MySQL/T-SQL</li>
                                    <li>JavaScript</li>
                                    <li>HTML/CSS</li>
                                </ul>
                            </div>
                            <div className='skill-column'>
                                <h5>Frameworks:</h5>
                                <ul className='skill-list'>
                                    <li>Spring Boot</li>
                                    <li>Hibernate</li>
                                    <li>React</li>
                                </ul>
                            </div>
                            <div className='skill-column'>
                                <h5>Tools:</h5>
                                <ul className='skill-list'>
                                    <li>Visual Studio Code</li>
                                    <li>Terminal</li>
                                    <li>AWS Amplify</li>
                                    <li>Postman</li>
                                    <li>Chrome Developer Tools</li>
                                </ul>
                            </div>
                            <div className='skill-column'>
                                <h5>Knowledge:</h5>
                                <ul className='skill-list'>
                                    <li>Object Oriented Programming</li>
                                    <li>Algorithms and Data Structures</li>
                                    <li>RESTful API Design and Creation</li>
                                    <li>Database Design and Management</li>
                                    <li>Service Oriented Architecture</li>
                                    <li>Debugging</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        )
    }

}

export default About;