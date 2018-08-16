import React from 'react';
import moment from 'moment';

const DailyForecast = ({ forecastData }) => {
  const renderForecasts = forecastData.map(({ precipProbability, apparentTemperatureMax, apparentTemperatureMin, humidity, temperatureMax, temperatureMin, summary, sunriseTime, sunsetTime, time}, index) =>
    <div className="forecast-card">
      <p> {summary} </p>
      <p>{moment.unix(time).format('LL')}</p>
      <p>HI: {temperatureMax}</p>
      <p>LOW: {temperatureMin} </p>
      <p>Relative HI: {apparentTemperatureMax} </p>
      <p>Relative LOW: {apparentTemperatureMin}</p>
      <p>Chance of Precipitation: {precipProbability * 100}%</p>
      <p>Humidity: {humidity * 100}%</p>
      <p>Sunrise: {moment.unix(sunriseTime).format('LT')}</p>
      <p>Sunset: {moment.unix(sunsetTime).format('LT')}</p>
    </div>
  )
  return (
    <div>
      <h2>Daily Forecast</h2>
      {renderForecasts}
    </div>
  )
}

export default DailyForecast;
