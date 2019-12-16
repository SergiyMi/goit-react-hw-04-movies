import React, { Component } from 'react';

import movieApiServices from '../services/movie-api-services';

export default class Review extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    this.fetchDetails().then(response =>
      this.setState({ reviews: response.results }),
    );
  }

  fetchDetails = () => {
    const movieId = this.props.match.params.movieId;
    return movieApiServices.fetchReview(movieId);
  };

  render() {
    const { reviews } = this.state;
    return (
      <div>
        {reviews.length <= 0 && (
          <p>We do not have any description about this movie</p>
        )}
        {reviews.length > 0 && (
          <>
            <h2>Movie Review</h2>
            <ul>
              {reviews.map(review => (
                <li key={review.id}>
                  <h3>{`Autor: ${review.author}`}</h3>
                  <p>{review.content}</p>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}
