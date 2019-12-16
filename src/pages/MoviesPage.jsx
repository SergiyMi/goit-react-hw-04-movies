import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import movieApiServices from '../services/movie-api-services';

import SearchBar from '../SearchBar/SearchBar';

export default class MoviesPage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search).get('query');
    if (!query) {
      return;
    }

    this.fetchMovies(query).then(data =>
      this.setState({ movies: data.results }),
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = new URLSearchParams(prevProps.location.search).get(
      'query',
    );
    const nextQuery = new URLSearchParams(this.props.location.search).get(
      'query',
    );
    if (prevQuery === nextQuery) {
      return;
    }

    this.fetchMovies(nextQuery).then(data =>
      this.setState({ movies: data.results }),
    );
  }

  setSearchQuery = searchQuery => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${searchQuery}`,
    });

    this.fetchMovies(searchQuery).then(data =>
      this.setState({ movies: data.results }),
    );
  };

  fetchMovies = searchQuery => {
    return movieApiServices.fetchMoviesQuery(searchQuery);
  };

  render() {
    const { match } = this.props;
    return (
      <div>
        <h1>Movies</h1>
        <SearchBar onSearch={this.setSearchQuery} />
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${match.url}/${movie.id}`,
                  state: { from: this.props.location },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
