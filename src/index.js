import React, { component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import YTSearch from 'youtube-api-search';

// import App from './components/app';
import SearchBar from './components/search_bar';
import reducers from './reducers';

const API_KEY = 'AIzaSyAeoVXnfl_yOrqSJpYYbyKtA_2QrP7CvAI';

const createStoreWithMiddleware = applyMiddleware()(createStore);

YTSearch({
  key: API_KEY, term: 'surfboards'
}, data => console.log(data));

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: []
    }
  }
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}

//attach component to the DOM via ReactDOM
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
