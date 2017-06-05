import React, { Component } from 'react'; 
import ReactDOM from 'react-dom'; 
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDwct3zLgV1cyYs1EVrc2hJCnMCKGaTsR4';

class App extends Component {
  constructor(props) {
    super(props);

    YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
      this.setState({ 
        videos, // syntactic sugar of videos : videos
        selectedVideo: videos[0]
      });
    });

    this.state = {
      videos: [],
      selectedVideo: null
    };
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} 
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));