import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar'

class App extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    currentPage: null,
    word: "Test"
  }

  changeWord = (newWord) => {
    console.log("changeWord called")
    this.setState({
      word: newWord
    })

  }


  render() {
    return (
      <div>
        <h1>ryan slevin</h1>
        <NavBar changeWord={this.changeWord}/>
        <p>{this.state.word}</p>
      </div>
    );

  }

}

export default App;
