import React, { Component } from 'react';

import '../../css/weather-icons.css';

class WeatherResult extends Component {

  convertToCelcius = (kelvin) => {
    return Math.round((kelvin - 273.15));
  }

  convertWeatherStateToImage = (state) => {
    switch(state) {
      case 'Thunderstorm':
        return <i className="wi wi-thunderstorm weather-state"></i>;
      case 'Drizzle':
        return <i className="wi wi-sprinkle weather-state"></i>;
      case 'Rain':
        return <i className="wi wi-rain weather-state"></i>;
      case 'Snow':
        return <i className="wi wi-snow weather-state"></i>;
      case 'Mist':
      case 'Fog':
        return <i className="wi wi-fog weather-state"></i>;
      case 'Haze':
        return <i className="wi wi-day-haze weather-state"></i>;
      case 'Clear':
        return <i className="wi wi-day-sunny weather-state"></i>;
      case 'Clouds':
        return <i className="wi wi-cloudy weather-state"></i>;
      case 'Extreme':
        return <i className="wi wi-tornado weather-state"></i>;
      default:
        return <i className="wi wi-cloud weather-state"></i>;
    }
  }

  weatherCard = (weather) => {
    return (
      <div className="weather">
        <div className="weather-info">
          <div className="weather-main-data">
            {this.convertWeatherStateToImage(weather.desc)}
            <h1>{this.convertToCelcius(weather.temp)}</h1><h2>°C</h2>
          </div>
          <div className="weather-country">
            <h1>{weather.city}, {weather.countryCode}</h1>
          </div>
          <div className="weather-secondary-data">
            <h2>Humidity: {weather.humidity}%</h2>
            <h2>Wind: {weather.wind} m/s</h2>
          </div>
        </div>
        <div className="weather-buttons">
          <button type="button" className="button-add">
            ✓
          </button>
          <button type="button" className="button-remove">
            &#x2715;
          </button>
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
