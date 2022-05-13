/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unreachable */
// Counter.js

import React from 'react';
import { createStore } from 'redux';
import './styles/Counter.css';

const msg1 = 'Redux reduces complexity';

// console.log(store.getState());
// console.log(msg1);

const Counter = () => {
  const counter = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
  };

  // const { createStore } = Redux;
  const store = createStore(counter);
  // console.log(store.getState());

  const render = () => {
    console.log('hooray');
    document.body.innerText = store.getState();
    // return (
    //   <div>
    //     {store.getState}
    //   </div>
    // );
  };

  store.subscribe(render);
  render();

  document.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' });
  });

  // expect(
  //   counter(0, { type: 'INCREMENT' }),
  // ).toEqual(1);

  // expect(
  //   counter(1, { type: 'INCREMENT' }),
  // ).toEqual(2);

  // expect(
  //   counter(2, { type: 'DECREMENT' }),
  // ).toEqual(1);

  // expect(
  //   counter(1, { type: 'DECREMENT' }),
  // ).toEqual(0);

  // expect(
  //   counter(0, { type: 'SOMETHING_ELSE' }),
  // ).toEqual(1);

  // expect(
  //   counter(undefined, {}),
  // ).toEqual(0);

  // console.log('Tests passed!');

  // return counter;
};

export default Counter;
