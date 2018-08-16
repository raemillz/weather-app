import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import logo from './logo.svg';
import './App.css';
import CurrentForecast from './components/CurrentForecast';
import Navbar from './components/Navbar.js';

const APIURL = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_KEY}/`

class App extends Component {
  constructor() {
    super()

    this.state= {
      fetchingData: true,
      weatherData: {},
      forecastKey: 'currently',
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      fetchJsonp(`${APIURL}${latitude},${longitude}`)
      .then(response => response.json())
      .then(weatherData => this.setState({
        fetchingData: false,
        weatherData
      }))
    });
  }

  handleForecastChange = forecastKey => this.setState({ forecastKey: forecastKey })

  render() {
    const { fetchingData, weatherData, forecastKey } = this.state
    const forecast = weatherData[forecastKey]

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
              <Navbar changeForecast={this.handleForecastChange}/>
              <CurrentForecast forecast={forecast} />
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
