import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../routes';

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink
          exact
          to={routes.HOME}
          style={{ color: 'blue' }}
          activeStyle={{ color: 'black' }}
        >
          HomePage
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.MOVIES}
          style={{ color: 'blue' }}
          activeStyle={{ color: 'black' }}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
