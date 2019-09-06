import React, { Component } from 'react';
import '../../App.css';
import './Resume.css';

class Resume extends Component {

    render() {

        let resumeClass = 'outer-container container-'+this.props.theme;
        let innerClass='inner-container inner-'+this.props.theme;

        return (
            <div className={resumeClass} id={this.props.id}>

                <div className={innerClass}>
                <div className='header-container'>
                <h2>Resume</h2>
                </div>
                <h3>Education</h3>
                <h4>University of London - Bachelors of Science Computer Science</h4>
                <p>October 2019 - 2023</p>
                <h4>Harvardx - CS50x</h4>
                <p>June - September 2019</p>
                <h3>Experience</h3>
                <h4>Business Operations Coordinator - City of Pitt Meadows</h4>
                <p>November 2016 - Present</p>
                <h3>Skills</h3>
                <div className='skills-container'>
                    <ul>
                        <li><strong>Languages</strong></li>
                        <li>Java</li>
                        <li>Javascript</li>
                        <li>HTML/CSS</li>
                        <li>T-SQL/MySQL</li>
                        <li>JSX</li>
                        <br></br>
                        <li><strong>Frameworks</strong></li>
                        <li>Spring/Spring Boot</li>
                        <li>React</li>
                    </ul>
                </div>
                <div className='skills-container'>
                    <ul>

                        <li><strong>Tools</strong></li>
                        <li>JUnit</li>
                        <li>Eclipse</li>
                        <li>VSCode</li>
                        <li>AWS Amplify</li>
                        <li>Debuggers</li>
                    </ul>
                </div>
            </div>
            </div>

        )
    }

}

export default Resume;