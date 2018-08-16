import React from 'react';

const CurrentForcast = ({ forcast: { apparentTemperature, precipProbability, humidity, summary, temperature, time}}) =>
<div>
  <h2>Current Forcast</h2>
  <div style={{ border: 'solid 1px black', padding: '16px', margin:'16px'}}>
    <h3>{summary}</h3>
    <p>Current Time: {time}</p>
    <p>Temperature: {Math.round(temperature)}*</p>
    <p>Feels Like: {Math.round(apparentTemperature)}*</p>
    <p>Chance of Precipitation: {precipProbability}</p>
    <p>Humidity: {humidity}% </p>
  </div>
</div>

export default CurrentForcast;
