import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ClipLoader } from 'react-spinners';

import { fetchWeather } from '../actions/weatherActions';
import SearchInput from './Search/SearchInput';
import WeatherCard from './Weather/WeatherCard';
import logo from '../img/cloud.svg';
import '../css/App.css';

class App extends Component {
  state = {
    userWeathers: []
  }

  searchClicked = (cityName) => {
    this.props.fetchWeather(cityName)
  }

  addWeather = (weather) => {
    const weathers = this.state.userWeathers.slice();
    weathers.push(weather);
    this.setState({
      userWeathers: weathers
    });
  }

  renderSavedWeathers = () => {
    if (this.state.userWeathers.length > 0) {
      return (
        this.state.userWeathers.slice().reverse().map(weather => {
          return <WeatherCard weather={weather} renderButtons={false} add={this.addWeather} />;
        })
      );
    }
  }

  render() {
    console.log('RENDER USERWEATHERS', this.state.userWeathers);
    let loader = null;
    let results = null;
    if (this.props.weather !== null) {
      loader = <ClipLoader color={'#3d3d3d'} loading={this.props.weather.loading} />;
      if (!this.props.weather.loading)
        results = <WeatherCard weather={this.props.weather} renderButtons={true} add={this.addWeather} />;
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
        {this.renderSavedWeathers()}
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
