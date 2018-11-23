import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import reducers from './store/reducers';
import Result from './Containers/Result';

const houses = [
  'Slytherin',
  'Gryffindor',
  'Ravenclaw',
  'Hufflepuff'
];

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_CHOICE_WITH_MY_INDEX":
      return {
        houses,
        selectedHouses: houses[Math.floor(Math.random() * 4)],
      }
    default:
      return state
  }
}

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Result />
        </div>
      </Provider>
    );
  }
}

export default App;
