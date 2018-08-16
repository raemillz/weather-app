import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import logo from './logo.svg';
import './App.css';
import CurrentForcast from './components/CurrentForcast';

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
          <h1 className="App-title">Welcome to Rachel's Weather App</h1>
        </header>
        <div className="App-intro">
          {
            fetchingData ?
            <img src={logo} className="App-logo" alt="logo" />
            :
            <CurrentForcast forcast={weatherData.currently} />
          }
        </div>
      </div>
    );
  }
}

export default App;
