import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return { ...state, counter: state.counter + action.amount };
  }

  if (action.type === 'DECREMENT') {
    return { ...state, counter: state.counter - action.amount };
  }

  if (action.type === 'TOGGLECOUNTER') {
    return { ...state, showCounter: !state.showCounter };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
