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

  removeWeather = (id) => {
    let weathers = this.state.userWeathers.slice();
    weathers = weathers.filter(weather => weather.id !== id);
    this.setState({
      userWeathers: weathers
    });
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
          return <WeatherCard 
            key={weather.id} 
            weather={weather} 
            saved={false} 
            add={this.addWeather}
            remove={this.removeWeather} />;
        })
      );
    }
  }

  render() {
    let loader = null;
    let results = null;
    if (this.props.weather !== null) {
      loader = <ClipLoader color={'#3d3d3d'} loading={this.props.weather.loading} />;
      if (!this.props.weather.loading)
        results = <WeatherCard 
          weather={this.props.weather}
          saved={true}
          add={this.addWeather} />;
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
