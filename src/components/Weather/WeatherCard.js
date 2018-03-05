import React, { Component } from 'react';

import Alert from '../Alert/Alert';
import '../../css/weather-icons.css';

class WeatherCard extends Component {
  shouldComponentUpdate() {
    if (!this.props.loading) {
      return false;
    }
    return true;
  }

  convertWeatherStateToImage = (state) => {
    switch (state) {
      case 'Thunderstorm':
        return <i className="wi wi-thunderstorm weather-state" />;
      case 'Drizzle':
        return <i className="wi wi-sprinkle weather-state" />;
      case 'Rain':
        return <i className="wi wi-rain weather-state" />;
      case 'Snow':
        return <i className="wi wi-snow weather-state" />;
      case 'Mist':
      case 'Fog':
        return <i className="wi wi-fog weather-state" />;
      case 'Haze':
        return <i className="wi wi-day-haze weather-state" />;
      case 'Clear':
        return <i className="wi wi-day-sunny weather-state" />;
      case 'Clouds':
        return <i className="wi wi-cloudy weather-state" />;
      case 'Extreme':
        return <i className="wi wi-tornado weather-state" />;
      default:
        return <i className="wi wi-cloud weather-state" />;
    }
  }

  convertToCelcius = kelvin => Math.round((kelvin - 273.15));

  renderCard = (weather) => {
    let buttons = null;
    if (!this.props.saved) {
      buttons = (
        <div className="weather-buttons">
          <button
            type="button"
            className="button-add"
            onClick={() => this.props.add(weather)}
          >
            ✓
          </button>
        </div>
      );
    }

    const style = {
      weather: {
        marginBottom: '20px',
      },
      weatherInfo: {
        display: 'inline-block',
        backgroundColor: '#f3f3f3',
        width: '500px',
        height: '200px',
        margin: '0 auto',
        marginRight: '30px',
        borderRadius: '10px 0px 0px 10px',
        boxShadow: '0px 2px 2px rgb(168, 168, 168)',
      },
      weatherMainData: {
        backgroundColor: '#f3f3f3',
        color: '#000',
        float: 'left',
        width: '140px',
        height: '200px',
        borderRight: '3px solid #ffffff',
        borderRadius: '10px 0px 0px 10px',
      },
      weatherCountry: {
        backgroundColor: '#415ba6',
        color: '#fdfdfd',
        height: '72px',
        width: '357px',
        float: 'right',
        borderBottom: '3px solid #ffffff',
      },
      weatherCountrySaved: {
        position: 'relative',
        backgroundColor: '#282828',
        color: '#fdfdfd',
        height: '72px',
        width: '357px',
        float: 'right',
        borderBottom: '3px solid #ffffff',
      },
      weatherSecondaryData: {
        fontFamily: 'Roboto, sans-serif',
        paddingTop: '72px',
        height: '128px',
      },
    };

    // if user saved the weather
    // change the styling for that card
    // and show the delete button for saved weathers
    let deleteButton = null;
    let savedStyle = style.weatherCountry;
    if (this.props.saved) {
      savedStyle = style.weatherCountrySaved;
      deleteButton = (
        <div
          className="delete-button"
          role="button"
          tabIndex="0"
          onClick={() => this.props.remove(weather.id)}
          onKeyPress={() => this.props.remove(weather.id)}
        >
          &#x2715;
        </div>
      );
    }

    return (
      <div className="weather" style={style.weather} >
        <div className="weather-info" style={style.weatherInfo} >
          <div className="weather-main-data" style={style.weatherMainData} >
            {this.convertWeatherStateToImage(weather.desc)}
            <h1>{this.convertToCelcius(weather.temp)}</h1>
            <h2>°C</h2>
          </div>
          <div className="weather-country" style={savedStyle} >
            {deleteButton}
            <h1>{weather.city}, {weather.countryCode}</h1>
            <p>{weather.time}</p>
          </div>
          <div className="weather-secondary-data" style={style.weatherSecondaryData} >
            <h2>Humidity: {weather.humidity}%</h2>
            <h2>Wind: {weather.wind} m/s</h2>
          </div>
        </div>
        {buttons}
      </div>
    );
  }

  render() {
    if (this.props.error === 'none') {
      return this.renderCard(this.props.weather);
    }
    return <Alert message={this.props.error} />;
  }
}

export default WeatherCard;
