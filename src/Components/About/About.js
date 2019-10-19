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
                                    <li>JavaScript</li>
                                    <li>Java</li>
                                    <li>MySQL</li>
                                    <li>HTML/CSS</li>
                                </ul>
                            </div>
                            <div className='skill-column'>
                                <h5>Frameworks:</h5>
                                <ul className='skill-list'>
                                    <li>React</li>
                                    <li>Spring Boot</li>
                                    <li>Hibernate</li>
                                </ul>
                            </div>
                            <div className='skill-column'>
                                <h5>Tools:</h5>
                                <ul className='skill-list'>
                                    <li>Visual Studio Code</li>
                                    <li>AWS Amplify</li>
                                    <li>Postman</li>
                                </ul>
                            </div>
                            <div className='skill-column'>
                                <h5>Knowledge:</h5>
                                <ul className='skill-list'>
                                    <li>Object Oriented Programming</li>
                                    <li>Algorithms and Data Structures</li>
                                    <li>RESTful API Design and Development</li>
                                    <li>Database Design and Management</li>
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