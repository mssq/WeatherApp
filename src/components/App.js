import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchWeather } from '../actions/weatherActions';
import SearchInput from './Search/SearchInput';
import WeatherResult from './Weather/WeatherResult';
import logo from '../img/cloud.svg';
import '../css/App.css';

class App extends Component {

  searchClicked = (cityName) => {
    this.props.fetchWeather(cityName)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Weather Forecast For Cities</h1>
        </header>
        <SearchInput clicked={this.searchClicked}/>
        {this.props.weather !== null ? <WeatherResult weather={this.props.weather}/> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    weather: state
  }
}

export default connect(mapStateToProps, { fetchWeather })(App);
