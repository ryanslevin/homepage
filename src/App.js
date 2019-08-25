import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Education from './Components/Education/Education';
import './App.css';

class App extends Component {

  state = {
    currentPage: null,
  }

  handlePageChange = (requestedPage) => {
    if (requestedPage === 'Education') {
      this.setState({
        currentPage: <Education />
      })
    }
  }

  render() {

    return (
      <div className='background'>
      <div className='app'>
        <Header handlePageChange={this.handlePageChange} />
        {this.state.currentPage}
      </div>
      </div>
    );
  }
}

export default App;
