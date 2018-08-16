import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import logo from './logo.svg';
import './App.css';
import CurrentForcast from './components/CurrentForcast';
import Navbar from './components/Navbar.js';

const APIURL = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_KEY}/`

class App extends Component {
  constructor() {
    super()

    this.state= {
      fetchingData: true,
      weatherData: {}
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      fetchJsonp(`${APIURL}${latitude},${longitude}`)
      .then(response => response.json())
      .then(weatherData => this.setState({
        fetchingData: false,
        weatherData }))
    });
  }

  render() {
    const { fetchingData, weatherData } = this.state
    console.log("The weather data is here: ", weatherData)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Rachels Weather App</h1>
        </header>
        <div className="App-intro">
          {
            fetchingData ?
            <img src={logo} className="App-logo" alt="logo" />
            :
            <div>
              <Navbar/>
              <CurrentForcast forcast={weatherData.currently} />
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
