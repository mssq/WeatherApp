import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import AlertS from 'react-s-alert';

import fetchWeather from '../actions/weatherActions';
import SearchInput from './Search/SearchInput';
import WeatherCard from './Weather/WeatherCard';
import Alert from './Alert/Alert';
import Header from './Header/Header';
import '../css/App.css';
import '../css/s-alert-default.css';
import '../css/scale.css';

class App extends Component {
  state = {
    userWeathers: [],
    duplicateError: false,
  }

  componentDidUpdate(nextProps, nextState) {
    // Reset duplicateError status if it has changed
    if (nextState.duplicateError !== this.state.duplicateError) {
      this.setState({
        duplicateError: false,
      });
    }
  }

  searchClicked = (cityName) => {
    this.props.fetchWeather(cityName);
  }

  removeWeather = (id) => {
    let weathers = this.state.userWeathers.slice();
    weathers = weathers.filter(weather => weather.id !== id);
    this.setState({
      userWeathers: weathers,
    });
  }

  addWeather = (weather) => {
    const weathers = this.state.userWeathers.slice();
    // Check for duplicate
    let duplicate = false;
    weathers.forEach((w) => {
      if (w.id === weather.id) {
        duplicate = true;
      }
    });

    // If it's not an duplicate, add it to the array
    // else display error message
    if (!duplicate) {
      weathers.push(weather);
      this.setState({
        userWeathers: weathers,
      });
    } else {
      this.setState({
        duplicateError: true,
      });
    }
  }

  renderDupliateError = () => <Alert message="the entry has already been added" />;

  renderSavedWeathers = () => {
    if (this.state.userWeathers.length > 0) {
      return (
        this.state.userWeathers.slice().reverse().map(weather => (
          <WeatherCard
            key={weather.id}
            weather={weather}
            error={this.props.error}
            saved={false}
            add={this.addWeather}
            remove={this.removeWeather}
          />
        ))
      );
    }
    return null;
  }

  render() {
    // If not loading and there is a weather fetched
    // save it to the result and render it
    let result = null;
    if (!this.props.loading && this.props.weather !== null) {
      result = (
        <WeatherCard
          weather={this.props.weather}
          saved
          loading={this.props.loading}
          error={this.props.error}
          add={this.addWeather}
        />
      );
    }

    return (
      <div className="App">
        <Header
          title="Weather Forecast For Cities"
        />

        <SearchInput clicked={this.searchClicked} />

        <div className="sweet-loading">
          <ClipLoader color="#3d3d3d" loading={this.props.loading} />
        </div>

        <div className="search-weather">
          {result}
          <hr className="divider" />
        </div>

        <div className="saved-weathers">
          {this.renderSavedWeathers()}
        </div>

        {this.state.duplicateError ? this.renderDupliateError() : null}
        
        <AlertS stack={{ limit: 1 }} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  weather: state.weather,
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps, { fetchWeather })(App);
