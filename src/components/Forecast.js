import React from 'react';
import moment from 'moment';

const Forecast = ({ forecast: { apparentTemperature, precipProbability, humidity, summary, temperature, time}}) =>
<div>
  <div className="forecast-card">
    <h3>{summary}</h3>
    <p>{moment.unix(time).format('MMMM Do YYYY, h:mm a')}</p>
    <p>Temperature: {Math.round(temperature)}*</p>
    <p>Feels Like: {Math.round(apparentTemperature)}*</p>
    <p>Chance of Precipitation: {Math.round(precipProbability * 100)}%</p>
    <p>Humidity: {Math.round(humidity * 100)}% </p>
  </div>
</div>

export default Forecast;
