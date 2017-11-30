import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // The two below have the same functionality - the 2nd uses ES6
      // Each returns a new array of city data
      // return state.concat([action.payload.data]);
      return [ action.payload.data, ...state ];
  }
  return state;
}