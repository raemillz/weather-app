import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state= {
      fetchingData: true,
      wetherData: {}
    }
  }
  render() {
    const {fetchingData} = this.state
    console.log(fetchingData)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Rachels Weather App</h1>
        </header>
        <p className="App-intro">
          {
            fetchingData ?
            <img src={logo} className="App-logo" alt="logo" />
            :
            <h1> Data is received </h1>
          }
        </p>
      </div>
    );
  }
}

export default App;
