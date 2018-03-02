import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ClipLoader } from 'react-spinners';

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
    let loader = null;
    let results = null;
    if (this.props.weather !== null) {
      loader = <ClipLoader color={'#3d3d3d'} loading={this.props.weather.loading} />
      if (!this.props.weather.loading)
        results = <WeatherResult weather={this.props.weather} />
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Weather Forecast For Cities</h1>
        </header>
        <SearchInput clicked={this.searchClicked}/>
        <div className='sweet-loading'>
          {loader}
        </div>
        {results}
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
