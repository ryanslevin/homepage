import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomepageImage from '../../../Images/homepage.png'

import './Carousel.css'

function Carousel() {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (


    <Slider {...settings}>
      <div className='out'>
      <div className='slider-container'>
      <img className='portfolio-image' src={HomepageImage} />
        <h4 href='https://github.com/ryanslevin/homepage'>Homepage</h4>
        <p>Languages: Javascript, JSX, HTML, CSS      Frameworks: React      Deployment: AWS Amplify</p>
        <p>Status: Deployed</p>
        <div className='slider-container-inner'>
          <p>Homepage is my personal portfolio site. Built with React and deployed with AWS Amplify.</p>
          <p>This project demonstrates my ability to deliver a finished and polished product using the latest frameworks and techniques.</p>

        </div>
      </div>
      </div>
      <div className='out'>
      <div className='slider-container'>
        <h4>page-availability</h4>
        <p>Languages: Powershell      Frameworks: .NET      Deployment: Locally Scheduled Task</p>
        <p>Status: Deployed</p>
        <div className='slider-container-inner'>
          <p>page-availability is a recursive Powershell script that iterates through a websites pages and saves their HTTP responses to a CSV file, making note of pages that returned an error code.</p>
          <p>This script was required in order to monitor the page availability of an eCommerce website and to catch cases where pages were unavailable to customers.</p>
          <p>This project demonstrates my passion for developing solutions to real business problems and my ability to create long-term automated solutions using a variety of technologies.</p>
        </div>
      </div>
      </div>
      <div className='out'>
      <div className='slider-container'>
        <h4>eReg</h4>
        <p>Languages: Java, MySQL, Javascript, JSC, HTML, CSS      Frameworks: Spring Boot, React     Deployment: Locally Scheduled Task</p>
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