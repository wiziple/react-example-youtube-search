import React from 'react'; 
import ReactDOM from 'react-dom'; 

import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyDwct3zLgV1cyYs1EVrc2hJCnMCKGaTsR4';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}


ReactDOM.render(<App />, document.querySelector('.container'));