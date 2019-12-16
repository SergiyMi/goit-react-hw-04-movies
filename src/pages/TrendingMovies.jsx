import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

import MovieDetailsPage from './MovieDetailsPage';

const URL =
  'https://api.themoviedb.org/3/trending/all/day?api_key=f61e3fe1218b86c7045eec558be98cb0';

const mapper = movies => {
  return movies.map(
    ({ name: title, original_name: original_title, ...props }) => ({
      title,
      original_title,
      ...props,
    }),
  );
};

export default class TrendingMovies extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    axios
      .get(URL)
      .then(resolve => this.setState({ movies: mapper(resolve.data.results) }));
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <h1>Trending Today</h1>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${match.url}movies/${movie.id}`,
                  state: { from: this.props.location },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
        <Route
          path={`${match.path}/movies/:movieId`}
          component={MovieDetailsPage}
        />
      </div>
    );
  }
}
