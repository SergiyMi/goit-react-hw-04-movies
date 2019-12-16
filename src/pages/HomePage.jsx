import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import routes from '../routes';

import TrendingMovies from './TrendingMovies';
import MovieDetailsPage from './MovieDetailsPage';

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidUpdate(prevProps, prevState) {
    this.props.history.push({
      ...this.props.location,
    });
  }

  render() {
    return (
      <div>
        <Route path={routes.HOME} component={TrendingMovies} />
        <Route path={routes.MOVIES_DETAILS} component={MovieDetailsPage} />
      </div>
    );
  }
}
