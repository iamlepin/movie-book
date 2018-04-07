import * as types from '../actions/actionTypes';

const initialState = {
  data: {},
  isLoading: false,
  error: false,
  errorMessage: '',
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_MOVIES_START:
      return { ...state, ...action.payload };
    case types.LOAD_MOVIES_SUCCESS:
      return { ...state, ...action.payload };
    case types.LOAD_MOVIES_FAILED:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default moviesReducer;
