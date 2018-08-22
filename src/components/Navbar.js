import React from 'react';

const Navbar = ({ changeRoute }) =>
  <div>
    <button className="nav-button" onClick={() => changeRoute('currently')}>Current</button>
    <button className="nav-button" onClick={() => changeRoute('minutely')}>Minutely</button>
    <button className="nav-button" onClick={() => changeRoute('hourly')}>Hourly</button>
    <button className="nav-button" onClick={() => changeRoute('daily')}>Daily</button>
  </div>

export default Navbar;
