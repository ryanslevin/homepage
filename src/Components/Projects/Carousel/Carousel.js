import React from 'react';
import Slider from 'react-slick';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faAws, faWindows, faJava } from '@fortawesome/free-brands-svg-icons'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomepageImage from '../../../Images/homepage.png'

import './Carousel.css'

function Carousel(props) {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  let sliderContainerClass = 'slider-container slider-' + props.theme;

  return (


    <Slider {...settings}>
      <div className='out'>
        <div className={sliderContainerClass}>
          <h4 href='https://github.com/ryanslevin/homepage'>Homepage</h4>
          <div className='two-columns'>
            <div className="column">
              <FontAwesomeIcon icon={faReact} />
              <p className='company-title company-title-react'>React</p>
            </div>
            <div className="column">
              <FontAwesomeIcon icon={faAws} />
              <p className='company-title company-title-aws'>AWS Amplify</p>
            </div>
          </div>
          <p>Status: Deployed</p>
          <div className='slider-container-inner'>
            <p>A personal portfolio site built with React and deployed with AWS Amplify.</p>
            <img className='portfolio-image' src={HomepageImage} />
          </div>
        </div>
      </div>
      <div className='out'>
        <div className={sliderContainerClass}>
          <h4>page-availability</h4>
          <FontAwesomeIcon icon={faWindows} />
          <p className='company-title company-title-microsoft'>Powershell / .NET</p>
          <p>Status: Deployed</p>
          <div className='slider-container-inner'>
            <p>page-availability is a recursive Powershell script that iterates through a websites pages and saves their HTTP responses to a CSV file, making note of pages that returned an error code.</p>
            <p>This script was required in order to monitor the page availability of an eCommerce website and to catch cases where pages were unavailable to customers.</p>
            <p>This project demonstrates my passion for developing solutions to real business problems and my ability to create long-term automated solutions using a variety of technologies.</p>
          </div>
        </div>
      </div>
      <div className='out'>
        <div className={sliderContainerClass}>
          <h4>eReg</h4>
          <div className='two-columns'>
            <div className="column">
          <FontAwesomeIcon icon={faJava} />
          <p className='company-title company-title-java'>Java</p>
          </div>
          <div className="column">
            <p className='company-title company-title-spring'>Spring Boot</p>
            </div>
            </div>
          <p>Status: In Progress</p>
          <div className='slider-container-inner'>
            <p>eReg is a web-based white label user and course management registration program for recreational organizations.</p>
            <p>A RESTful API backend written in Java using the Spring Boot framework is consumed by a React frontend.</p>
            <p>The program currently allows for user and course creation, updating and the creation of user registrations.</p>
          </div>
        </div>
      </div>

    </Slider>

  )
}

export default Carousel;