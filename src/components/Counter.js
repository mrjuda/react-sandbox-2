/* eslint-disable react/prop-types */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-unused-vars */
// Counter.js

import ReactDOM from 'react-dom/client';

import './styles/Counter.css';

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

  const RCounter = ({
    value,
    onIncrement,
    onDecrement,
  }) => (
    <div>
      <h1>{value}</h1>
      <button type="button" onClick={onIncrement}>+</button>
      <button type="button" onClick={onDecrement}>-</button>
    </div>
  );

  const createStore = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
      state = reducer(state, action);
      listeners.forEach((listener) => listener());
    };

    const subscribe = (listener) => {
      listeners.push(listener);
      return () => {
        let l;
        listeners = listeners.filter(l = l !== listener);
      };
    };

    dispatch({});
    return { getState, dispatch, subscribe };
  };

  const store = createStore(counter);

  const render = () => {
    document.body.innerText = store.getState();
    // ReactDOM.render(
    //   <RCounter
    //     value={store.getState()}
    //     onIncrement={() =>
    //       store.dispatch({
    //         type: 'INCREMENT',
    //       })
    //     }
    //     onDecrement={() =>
    //       store.dispatch({
    //         type: 'DECREMENT',
    //       })
    //     }
    //   />,
    //   document.getElementById('root'),
    // );
  };

  store.subscribe(render);
  render();

  document.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' });
  });
};

export default Counter;
