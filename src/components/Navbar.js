import React from 'react';

const Navbar = ({ changeForecast }) =>
  <div>
    <button className="nav-button" onClick={() => changeForecast('currently')}>Current</button>
    <button className="nav-button" onClick={() => changeForecast('minutely')}>Minutely</button>
    <button className="nav-button" onClick={() => changeForecast('hourly')}>Hourly</button>
    <button className="nav-button" onClick={() => changeForecast('daily')}>Daily</button>
  </div>

export default Navbar;
