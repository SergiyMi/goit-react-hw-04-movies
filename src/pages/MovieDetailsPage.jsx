import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import constants from '../services/constants';
import movieApiServices from '../services/movie-api-services';
import Cast from './Cast';
import Review from './Review';
import routes from '../routes';

export default class MovieDetailsPage extends Component {
  state = {
    movie: null,
    isCast: false,
  };

  componentDidMount() {
    this.fetchDetails().then(response => this.setState({ movie: response }));
  }

  fetchDetails = () => {
    const movieId = this.props.match.params.movieId;
    return movieApiServices.fetchShowDetails(movieId);
  };

  onGoBack = () => {
    const { location, history } = this.props;
    // if (location.state && location.state.from) {
    //   history.push(location.state.from);
    //   return;
    // }
    history.push('/movies');
  };

  render() {
    const { movie } = this.state;
    const { match } = this.props;
    return (
      <div>
        <button type="button" onClick={this.onGoBack}>
          Go to back
        </button>
        <h2>Movie Details Page</h2>
        {movie && (
          <>
            <img
              src={constants.IMAGE_URL + movie.poster_path}
              width="320"
              alt={movie.original_title}
            />
            <h3>{movie.original_title}</h3>
            <p>Movie Id: {match.params.movieId}</p>
          </>
        )}
        <div>
          <h2>Additional information</h2>
          <ul>
            <li>
              <Link
                to={{
                  pathname: `${match.url}/cast`,
                  state: { from: this.props.location },
                }}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `${match.url}/reviews`,
                  state: { from: this.props.location },
                }}
              >
                Review
              </Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route path={routes.MOVIE_CAST} component={Cast} />
          <Route path={routes.MOVIE_REVIEW} component={Review} />
        </Switch>
      </div>
    );
  }
}
