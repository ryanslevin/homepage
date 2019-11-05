import React from 'react';
import Slider from 'react-slick';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomepageImage from '../../../Images/homepage.png';
import EregImage from '../../../Images/ereg.png';
import PageAvailabilityImage from '../../../Images/pageavailability.png';
import UmbrellaImage from '../../../Images/umbrella_ss.png';
import MinimalistImage from '../../../Images/minimalist_ss.png';

import './Carousel.css';
import '../../../App.css';

function Carousel(props) {



  //Variables to control class theming
  let sliderContainerClass = 'slider-container slider-' + props.theme;
  let faLinkClass = 'fa-' + props.theme;
  let headerClass = 'project-link ' + props.theme;
  let prevArrowClass = 'slick-prev slick-' + props.theme;
  let nextArrowClass = 'slick-next slick-' + props.theme;

    //Settings for carousel
    let settings = {
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <button type="button" class={prevArrowClass}>Previous</button>,
      nextArrow: <button type="button" class={nextArrowClass}>Previous</button>,
    };

  return (

    <Slider {...settings}>

<div className='out'>
      <div className={sliderContainerClass}>
          <div className='slider-container-inner'>
          <a className={headerClass} href='https://github.com/ryanslevin/minimalist'><FontAwesomeIcon icon={faGithub} className={faLinkClass} /></a>
          <a className={headerClass} href="https://www.minimalistapp.com"><h4>MinimaList</h4></a>
          <p>Todo List Webapp</p>
              <div className="column">
                <h5>Languages: JavaScript/Java </h5>
                <h5>Frameworks: React/Spring Boot</h5>
                <h5>Tools: AWS Amplify/AWS Elastic Beanstalk/Auth0</h5>
                <ul>
                  <li>Minimalist todo/tasklist webapp that allows users to create, read, update and delete daily tasks.</li>
                  <li>Backend built with Java and Spring Boot persisting data to a MySQL database, frontend built with JavaScript and React.</li>
                  <li>Auth0 implemented to provide authentication and authorization for both backend and frontend.</li>
                  <li>Deployed with AWS Amplify and AWS Elastic Beanstalk.</li>
                </ul>
              </div>
              <div className="column">
                <a  href="https://www.minimalistapp.com"><img className='portfolio-image' alt='Screenshot of MinimaList web app' src={MinimalistImage} /> </a>
              </div>
            </div>
          </div>
          </div>
      <div className='out'>
      <div className={sliderContainerClass}>
          <div className='slider-container-inner'>
          <a className={headerClass} href='https://github.com/ryanslevin/umbrella'><FontAwesomeIcon icon={faGithub} className={faLinkClass} /></a>
          <a className={headerClass} href="https://www.umbrellaadvice.com"><h4>UmbrellaAdvice</h4></a>
          <p>Weather/Clothing Advice Webapp</p>
              <div className="column">
                <h5>Languages: JavaScript </h5>
                <h5>Frameworks: React</h5>
                <h5>Tools: AWS Amplify</h5>
                <ul>
                  <li>UmbrellaAdvice.com uses location services, the OpenWeatherMaps API, and the Google Places API to provide weather dependant clothing advice.</li>
                  <li>Deployed with AWS Amplify to allow for continuous deployment.</li>
                </ul>
              </div>
              <div className="column">
                <a  href="https://www.umbrellaadvice.com"><img className='portfolio-image' alt='Screenshot of Umbrella web app' src={UmbrellaImage} /> </a>
              </div>
            </div>
          </div>
          </div>
          <div className='out'>
        <div className={sliderContainerClass}>
          <div className='slider-container-inner'>
          <a className={headerClass} href='https://github.com/ryanslevin/homepage'><FontAwesomeIcon icon={faGithub} className={faLinkClass} /><h4>Homepage</h4></a>
          <p>Personal Portfolio Website</p>
              <div className="column">
                <h5>Language: JavaScript</h5>
                <h5>Framework: React</h5>
                <h5>Tools: AWS Amplify</h5>
                <ul>
                  <li>Single page application using the React framework</li>
                  <li>Deployed with AWS Amplify to allow for continuous deployment</li>
                  <li>State controlled themes and scroll-based navigation</li>
                </ul>
              </div>
              <div className="column">
                <img className='portfolio-image' alt='Screenshot of Homepage web-app'src={HomepageImage} />
              </div>
            </div>
          </div>
        </div>
      <div className={sliderContainerClass}>
        <div className='slider-container-inner'>
        <a className={headerClass} href='https://github.com/ryanslevin/page-availability'><FontAwesomeIcon icon={faGithub} className={faLinkClass} /><h4>Page Availability</h4></a>
        <p>Recursive Page Availability Monitor</p>
        <div className="column">
                <h5>Languages: PowerShell</h5>
                <ul>
                  <li>Recursive page availability monitor for eCommerce website.</li>
                  <li>Written in PowerShell using .NET framework functionality</li>
                  <li>Reduced staff time required to manually monitor page availability</li>
                  <li>Automated monitoring significantly reduced page downtime and improved customer experience</li>
                </ul>
              </div>
              <div className="column">
          <img className='portfolio-image' alt='Screenshot of page availability script'src={PageAvailabilityImage} />
        </div>
        </div>
      </div>
      <div className='out'>
        <div className={sliderContainerClass}>
          <div className='slider-container-inner'>
          <a className={headerClass} href='https://github.com/ryanslevin/ereg'><FontAwesomeIcon icon={faGithub} className={faLinkClass} /><h4>eReg</h4></a>
          <p>User and Course Registration Management</p>
              <div className="column">
              <h5>Languages: Java </h5>
                <h5>Frameworks: Spring Boot</h5>
                <ul>
                  <li>RESTful API built with Java and Spring Boot</li>
                  <li>Uses Hibernate to persist data to a MySQL database</li>
                </ul>                
              </div>
            <div className='column'>
            <img className='portfolio-image' alt='Screenshot of eReg code' src={EregImage} />
            </div>
            </div>
          </div>
        </div>

    </Slider>

  )
}

export default Carousel;