/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unreachable */
// Counter.js

import React from 'react';
import { createStore } from 'redux';
import './styles/Counter.css';

const msg1 = 'Redux reduces complexity';

// console.log(store.getState());
console.log(msg1);

const Counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }

  // const { createStore } = Redux;
  const store = createStore(Counter);

  console.log(store.getState());

  expect(
    Counter(0, { type: 'INCREMENT' }),
  ).toEqual(1);

  expect(
    Counter(1, { type: 'INCREMENT' }),
  ).toEqual(2);

  expect(
    Counter(2, { type: 'DECREMENT' }),
  ).toEqual(1);

  expect(
    Counter(1, { type: 'DECREMENT' }),
  ).toEqual(0);

  expect(
    Counter(0, { type: 'SOMETHING_ELSE' }),
  ).toEqual(1);

  expect(
    Counter(undefined, {}),
  ).toEqual(0);

  console.log('Tests passed!');

  return (
    <div>
      <span>
        Redux is awesome!
      </span>
    </div>
  );
};

export default Counter;
