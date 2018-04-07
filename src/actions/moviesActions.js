import * as types from './actionTypes';
import MovieApi from '../api/movieApi';

const loadMoviesStart = () => ({
  type: types.LOAD_MOVIES_START,
  payload: {
    isLoading: true,
  },
});

const loadMoviesSuccess = movies => ({
  type: types.LOAD_MOVIES_SUCCESS,
  payload: {
    data: movies,
    isLoading: false,
  },
});

const loadMoviesFailed = (error, errorMessage) => ({
  type: types.LOAD_MOVIES_FAILED,
  payload: {
    error,
    errorMessage,
    isLoading: false,
  },
});

export const loadMovies = (query, param) => dispatch => {
  dispatch(loadMoviesStart());
  return MovieApi.get(query, param)
    .then(data => {
      if (data.success === false) {
        console.log('data: ', data);
        dispatch(loadMoviesFailed(true, data.status_message));
      }
      dispatch(loadMoviesSuccess(data));
    })
    .catch(error => {
      console.log('error: ', error);
      throw new Error(error);
    });
};
