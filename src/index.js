/* eslint-disable no-undef */
/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
// import store from './app/store';
import reportWebVitals from './reportWebVitals';
import App from './App';

/*
  APP: MATH
*/

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <Router>
//         <App />
//       </Router>
//     </Provider>
//   </React.StrictMode>,
// );

/*
  APP: COUNTER
*/

// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// };

// const Counter = ({
//   value,
//   onIncrement,
//   onDecrement,
// }) => (
//   <div>
//     <h1>{value}</h1>
//     <button type="button" onClick={onIncrement}>+</button>
//     <button type="button" onClick={onDecrement}>-</button>
//   </div>
// );

// const createStore = (reducer) => {
//   let state;
//   let listeners = [];

//   const getState = () => state;

//   const dispatch = (action) => {
//     state = reducer(state, action);
//     listeners.forEach((listener) => listener());
//   };

//   const subscribe = (listener) => {
//     listeners.push(listener);
//     return () => {
//       let l;
//       listeners = listeners.filter(l = l !== listener);
//     };
//   };

//   dispatch({});
//   return { getState, dispatch, subscribe };
// };

// const store = createStore(counter);

// const render = () => {
//   ReactDOM.render(
//     <Counter
//       value={store.getState()}
//       onIncrement={() =>
//         store.dispatch({
//           type: 'INCREMENT',
//         })
//       }
//       onDecrement={() =>
//         store.dispatch({
//           type: 'DECREMENT',
//         })
//       }
//     />,
//     document.getElementById('root'),
//   );
// };

// store.subscribe(render);
// render();

/*
  APP: TODOS
*/

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action),
      ];
    case 'TOGGLE_TODO':
      return state.map((t) => todo(t, action));
    default:
      return state;
  }
};

const visibilityFilter = (
  state = 'SHOW_ALL',
  action,
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

// const testAddTodo = () => {

// }

const obj1 = {
  name: 'teixeira',
  year: 1987,
  wage: 30000,
};

console.log(obj1);

const obj2 = { ...obj1, wage: 36000 };

console.log(obj2);

reportWebVitals();
