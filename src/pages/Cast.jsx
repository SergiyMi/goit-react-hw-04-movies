import React, { Component } from 'react';

import constants from '../services/constants';
import movieApiServices from '../services/movie-api-services';

export default class Cast extends Component {
  state = {
    casts: [],
  };

  componentDidMount() {
    this.fetchDetails().then(response =>
      this.setState({ casts: response.cast }),
    );
  }

  fetchDetails = () => {
    const movieId = this.props.match.params.movieId;
    return movieApiServices.fetchCast(movieId);
  };

  render() {
    return (
      <div>
        {this.state.casts && (
          <>
            <h2>Movie Cast</h2>
            <ul>
              {this.state.casts.map(cast => (
                <li key={cast.id}>
                  <img
                    src={
                      cast.profile_path
                        ? constants.IMAGE_URL + cast.profile_path
                        : cast.name
                    }
                    width="320"
                    alt={cast.name}
                  />
                  <h3>{cast.name}</h3>
                  <p>Character: {cast.character}</p>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}
