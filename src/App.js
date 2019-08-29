import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Education from './Components/Education/Education';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact'
import './App.css';

import * as Scroll from 'react-scroll';
import { Link, Events, scroller } from "react-scroll";

class App extends Component {


    componentDidMount() {
      Events.scrollEvent.register("begin", function(to, element) {
        console.log("begin", arguments);
      });
  
      Events.scrollEvent.register("end", function(to, element) {
        console.log("end", arguments);
      });
    }

  render() {

    return (
        <div className='app'>
            <Header handlePageChange={this.handlePageChange} />
            <div className='container'>
              <Education id="educationContainer" />
              <Projects id='projectsContainer' />
              <Contact id='contactContainer' />
            </div>
          </div>
    );
  }
}

export default App;
