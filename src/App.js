import React, { Component } from 'react';
import Header from './Components/Header/Header'
import Education from './Components/Education/Education'


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
    const style = {
      margin: '20px',
    }

    return (
      <div style={style}>
        <Header handlePageChange={this.handlePageChange} />
        {this.state.currentPage}
      </div>
    );
  }
}

export default App;
