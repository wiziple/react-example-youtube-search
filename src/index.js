import React, { Component } from 'react'; 
import ReactDOM from 'react-dom'; 
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyDwct3zLgV1cyYs1EVrc2hJCnMCKGaTsR4';

class App extends Component {
  constructor(props) {
    super(props);

    YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
      this.setState({ videos }); // syntactic sugar of below line
      //this.setState({ videos : videos });
    });

    this.state = { videos: [] };
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));