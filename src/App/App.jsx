import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.module.css';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import Navigation from '../Navigation/Navigation';
import routes from '../routes';
import MovieDetailsPage from '../pages/MovieDetailsPage';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path={routes.HOME} component={HomePage} />
            <Route path={routes.MOVIES_DETAILS} component={MovieDetailsPage} />
            <Route path={routes.MOVIES} component={MoviesPage} />
            <Redirect to={routes.HOME} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
