import React from 'react';
import moment from 'moment';
import { Grid } from 'semantic-ui-react';


const Forecast = ({ forecast: { apparentTemperature, precipProbability, humidity, summary, temperature, time}}) =>
<div>
  <Grid celled>
  <Grid.Row>
    <Grid.Column>
      <div className="forecast-card">
        <h3>{summary}</h3>
        <p>{moment.unix(time).format('LLLL')}</p>
        <p>Temperature: {Math.round(temperature)}*</p>
        <p>Feels Like: {Math.round(apparentTemperature)}*</p>
        <p>Chance of Precipitation: {Math.round(precipProbability * 100)}%</p>
        <p>Humidity: {Math.round(humidity * 100)}% </p>
      </div>
    </Grid.Column>
    </Grid.Row>
  </Grid>
</div>

export default Forecast;
