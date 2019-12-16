import axios from 'axios';

import constants from '../services/constants';

const fetchShowDetails = movieId => {
  return axios
    .get(`${constants.URL}/${movieId}?api_key=${constants.KEY}`)
    .then(response => response.data);
};

const fetchMoviesQuery = searchQuery => {
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=${constants.KEY}&query=${searchQuery}`;
  return axios.get(URL).then(response => response.data);
};

const fetchCast = movieId => {
  return axios
    .get(`${constants.URL}/${movieId}/credits?api_key=${constants.KEY}`)
    .then(response => response.data);
};

const fetchReview = movieId => {
  return axios
    .get(`${constants.URL}/${movieId}/reviews?api_key=${constants.KEY}`)
    .then(response => response.data);
};

export default { fetchShowDetails, fetchMoviesQuery, fetchCast, fetchReview };
