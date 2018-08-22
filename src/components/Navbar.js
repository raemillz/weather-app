import React from 'react';
import { Menu } from 'semantic-ui-react';

const Navbar = ({ changeRoute }) =>
  <div>
    <Menu className="compact">
      <Menu.Item onClick={() => changeRoute('currently')} name='Current'>
      </Menu.Item>
      <Menu.Item onClick={() => changeRoute('minutely')} name='Minutely'>
      </Menu.Item>
      <Menu.Item onClick={() => changeRoute('hourly')} name='Hourly'>
      </Menu.Item>
      <Menu.Item className='center aligned' onClick={() => changeRoute('daily')} name='Daily'>
      </Menu.Item>
      {/*<button className="nav-button" onClick={() => changeRoute('currently')}>Current</button>
      <button className="nav-button" onClick={() => changeRoute('minutely')}>Minutely</button>
      <button className="nav-button" onClick={() => changeRoute('hourly')}>Hourly</button>
      <button className="nav-button" onClick={() => changeRoute('daily')}>Daily</button>*/}
    </Menu>
  </div>

export default Navbar;
