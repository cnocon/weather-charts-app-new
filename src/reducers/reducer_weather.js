import { FETCH_WEATHER } from '../actions/index';

// set a default state in arg as array bc it's going to be a list of cities w/their data on the screen
export default function(state=[], action) {
  // work with data from action
  switch (action.type) {
    case FETCH_WEATHER:
      // NEVER mutate the current state in your reducer; you want to return a brand new object. so instead of doing something like return state.push(action.payload.data), which mutates the original state array, you want to use a method that creates a new object, like .concat, which takes two arrays and creates a new one, like `return state.concat([action.payload.data]);`
      return [action.payload.data].concat(state);
    default:
      // do nothing
  }

  return state;
}