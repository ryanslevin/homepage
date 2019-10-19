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
          <a className={headerClass} href='https://github.com/ryanslevin/umbrella'><FontAwesomeIcon icon={faGithub} className={faLinkClass} /></a>
          <a className={headerClass} href="https://www.umbrellaadvice.com"><h4>UmbrellaAdvice</h4></a>
          <p>Weather/Clothing Advice Webapp</p>
              <div className="column">
                <h5>Languages: JavaScript </h5>
                <h5>Frameworks: React</h5>
                <h5>Tools: AWS Amplify</h5>
                <ul>
                  <li>Uses location services, OpenWeatherMaps API, and Google Paces API</li>
                  <li>Gets weather at the requested location and provides advice on clothing</li>
                  <li>Deployed with AWS Amplify to allow for continuous deployment</li>
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
                <h5>Frameworks: .NET</h5>
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
              <h5>Languages: Java / MySQL / JavaScript / JSX / CSS </h5>
                <h5>Frameworks: Spring Boot / React</h5>
                <h5>Tools: AWS Amplify</h5>
                <ul>
                  <li>RESTful API built with Java and Spring Boot</li>
                  <li>Uses Hibernate to integrate with MySQL database</li>
                  <li>Front end built with React to create Single Page Application experience</li>
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