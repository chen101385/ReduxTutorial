import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// import App from './components/app';
import SearchBar from './components/search_bar';
import reducers from './reducers';

const API_KEY = 'AIzaSyAeoVXnfl_yOrqSJpYYbyKtA_2QrP7CvAI';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//attach component to the DOM via ReactDOM
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
