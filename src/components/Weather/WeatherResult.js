import React, { Component } from 'react';

class WeatherResult extends Component {

  convertKelvin = (kelvin) => {
    return Math.round( (kelvin - 273.15) * 10) / 10;
  }

  weatherCard = (weather) => {
    return (
      <div className="weather-info">
        <div className="weather-main-data">
          <h1>{weather.desc}</h1>
          <h1>{this.convertKelvin(weather.temp)}°C</h1>
        </div>
        <div className="weather-country">
          <h1>{weather.city}, {weather.countryCode}</h1>
        </div>
        <div className="weather-secondary-data">
          <h2>Humidity: {weather.humidity}%</h2>
          <h2>Wind: {weather.wind} m/s</h2>
        </div>
      </div>
    );
  }

  render() {
    console.log('WEATHER', this.props.weather);
    return (
      this.weatherCard(this.props.weather)
    )
  }
}

export default WeatherResult;
