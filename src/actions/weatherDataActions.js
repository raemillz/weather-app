import fetchJsonp from 'fetch-jsonp';
import { stopFetchingData } from './fetchingDataActions';

const APIURL = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_KEY}/`

const receivedWeatherData = weatherData => {
  return {
    type: 'RECEIVED_WEATHER_DATA',
    weatherData
  }
}

export const fetchWeatherData = () => {
  return dispatch => {
    return navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords

      fetchJsonp(`${APIURL}${latitude},${longitude}`)
      .then(response => response.json())
      .then(weatherData => {
        dispatch(receivedWeatherData(weatherData))
        dispatch(stopFetchingData())
      })
    });
  }
}
