import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import logo from './logo.svg';
import './App.css';

const APIURL = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_KEY}/`

class App extends Component {
  constructor() {
    super()

    this.state= {
      fetchingData: true,
      wetherData: {}
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      console.log(process.env)
      fetchJsonp(`${APIURL}${latitude},${longitude}`)
      .then(response => response.json())
      .then(forecast => console.log(forecast))
    });
  }

  render() {
    const { fetchingData } = this.state
    console.log(fetchingData)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Rachel's Weather App</h1>
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
