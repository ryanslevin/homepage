import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar'
import Education from './Components/Education/Education';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import './App.css';

import { Events } from "react-scroll";


class App extends Component {

  state = {
    currentContainer: 'Home'
  }

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
            <NavBar />
            <div className='container'>
              <Home id='homeContainer' />
              <Education id="educationContainer" />
              <Projects id='projectsContainer' />
              <Contact id='contactContainer' />
            </div>
          </div>
    );
  }
}

export default App;
