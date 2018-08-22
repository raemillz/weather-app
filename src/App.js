import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchJsonp from 'fetch-jsonp';
import logo from './logo.svg';
import './App.css';
import Forecast from './components/Forecast';
import MinutelyForecast from './components/MinutelyForecast';
import DailyForecast from './components/DailyForecast';
import Navbar from './components/Navbar.js';

import { changeRoute } from './actions/routeActions';
import { stopFetchingData } from './actions/fetchingDataActions';


const APIURL = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_KEY}/`

class App extends Component {
  constructor() {
    super()

    this.state= {
      weatherData: {},
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      fetchJsonp(`${APIURL}${latitude},${longitude}`)
      .then(response => response.json())
      .then(weatherData => {
        this.setState({
          fetchingData: false,
          weatherData
        }, this.props.stopFetchingData())
      })
    });
  }

  handleRouteChange = routeName => this.props.changeRoute({ routeName: routeName })

  render() {
    const { weatherData, } = this.state
    const { fetchingData, routeName } = this.props
    const forecast = weatherData[routeName]

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
              <Navbar changeRoute={this.handleRouteChange}/>
              {routeName === 'currently' &&
                <div>
                  <h2> Current Forecast</h2>
                  <Forecast forecast={forecast} />
                </div>
              }
              {routeName === 'minutely' && <MinutelyForecast forecastData={forecast.data} />}
              {routeName === 'hourly' &&
                <div>
                  <h2> Hourly Forecast </h2>
                  {forecast.data.map(( forecast, index) => <Forecast key={index} forecast={forecast} />)}
                </div>
              }
              {routeName === 'daily' && <DailyForecast forecastData={forecast.data} />}
            </div>
          }
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    fetchingData: state.fetchingData,
    routeName: state.route.routeName
  }), {
    changeRoute,
    stopFetchingData,
  }
)(App);
