import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

const API_KEY = 'AIzaSyAr1J0-0QxsoPqEepNtr9mMiOtSq6o6CWw';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      videos: [],
      selectedVideo: null
     };
    
    YTSearch({key: API_KEY, term: 'surfboards'}, (d) => {
      this.setState({
        videos: d,
        selectedVideo: d.length > 0 ? d[0] : null
      });
    });
  }
  
  render () {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    ) 
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));
