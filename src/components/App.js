import React, { Component } from 'react';

import SearchInput from './Search/SearchInput';
import logo from '../img/cloud.svg';
import '../css/App.css';

class App extends Component {

  searchClicked = (props) => {
    console.log('PROPS', props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Weather Forecast For Cities</h1>
        </header>
        <SearchInput clicked={this.searchClicked}/>
      </div>
    );
  }
}

export default App;
