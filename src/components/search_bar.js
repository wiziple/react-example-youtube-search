import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term : 'initial value'};
  }

  render() {
    // this.state.term = event.target.value; // BAD
    return (
      <div>
        <input 
        value={this.state.term}
        onChange={event => this.setState({ term: event.target.value })} />
        Value of the input : { this.state.term } 
      </div>
    );
  }
}

export default SearchBar;
