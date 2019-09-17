import React from 'react';

import './Home.css'
import '../../App.css'

export default function Home(props) {


    //Variables to hold the CSS class names, theme appended to end via props
    //to enable theme switching
    let homeContainerClass = 'home home-' + props.theme;
    let nameContainerClass = 'name-container';
    let nameClass = 'name name-' + props.theme;
    let titleClass = 'title title-' + props.theme;
    let linkedinClass = 'fa fa-linkedin fa-' + props.theme;
    let githubClass = 'fa fa-github fa-' + props.theme;
    let twitterClass = 'fa fa-twitter fa-' + props.theme;
    let backgroundContainer = 'background-container background-'+props.theme;

   

    return (

        <div className={homeContainerClass} id={props.id}>
            <div className={nameContainerClass}>
                <h2 className={nameClass} >Ryan Slevin</h2>
                <div className={titleClass}>Software Engineer - Vancouver, BC</div>
                <br></br>
                <a href="https://www.linkedin.com/in/ryan-slevin-02b99140/" className={linkedinClass}></a>
                <a href="https://github.com/ryanslevin" className={githubClass}></a>
                <a href="https://twitter.com/ryansslevin" className={twitterClass}></a>
            </div>
        </div>
    )
}
