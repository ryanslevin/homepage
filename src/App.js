import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar'
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import Background from './Components/Background/Background'
import './App.css';

import { Events } from "react-scroll";


class App extends Component {

  state = {
    currentContainer: 'Home',
    theme: 'dark'
  }


  componentDidMount() {

    //Outputs scroll begin events to console for debugging react-scroll
    Events.scrollEvent.register("begin", function (to, element) {
      console.log("begin", arguments);
    });

    //Outputs scroll end events to console for debugging react-scroll
    Events.scrollEvent.register("end", function (to, element) {
      console.log("end", arguments);
    });
  }

  //Handles theme change action from NavBar and sets state
  handleThemeChange(event) {
    if (this.state.theme === 'dark') {
      this.setState({
        theme: 'light'
      })
    } else {
      this.setState({
        theme: 'dark'
      })
    }
  }

  componentDidUpdate() {
    console.log(this.state.theme)
  }

  render() {

    let appStyleClass = 'app app-' + this.state.theme;
    let backgroundContainerStyle = 'background-container background-container-'+this.state.theme;

    return (
      <div className={appStyleClass}>
        <NavBar theme={this.state.theme} handleThemeChange={() => this.handleThemeChange.bind(this)} />
        <div className={backgroundContainerStyle}>
          <Background theme={this.state.theme} />
        </div>
        <Home id='homeContainer' theme={this.state.theme} />
        <About id="aboutContainer" theme={this.state.theme} />
        <Projects id='projectsContainer' theme={this.state.theme} />
        <Contact id='contactContainer' theme={this.state.theme} />
      </div>
    );
  }
}

export default App;
