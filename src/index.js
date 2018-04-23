import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import YTSearch from 'youtube-api-search';
//use "_" [underscore] for lodash
import _ from 'lodash';

// import App from './components/app';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import reducers from './reducers';
const API_KEY = 'AIzaSyAeoVXnfl_yOrqSJpYYbyKtA_2QrP7CvAI';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }
    //default search upon initial component rendering
    this.videoSearch('hello kitty');
  }
  videoSearch(term) {
    //run YT search when App component renders
    YTSearch({
      key: API_KEY, term: term
    }, videos => this.setState({
      videos,
      selectedVideo: videos[0]
    })
    )
  };

  //PRO-TIP: can define functions outside of render/sub-component (see YTSearch above) OR within a sub-component (see onVideoSelect below)
  render() {
    //debounce every 300ms to minimize lag
    const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />
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
