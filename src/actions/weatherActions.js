import axios from 'axios';
import { FETCH_WEATHER_START, FETCH_WEATHER_ERROR,
  RECEIVE_WEATHER, apikey } from '../constants';

const fetchWeather = (city) => {
  return (dispatch) => {
    dispatch({ type: FETCH_WEATHER_START });
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
      .then((response) => {
        setTimeout(() => {
          dispatch({ type: RECEIVE_WEATHER, payload: response.data });
        }, 1000);
      })
      .catch((error) => {
        setTimeout(() => {
          dispatch({ type: FETCH_WEATHER_ERROR, payload: error.response.data });
        }, 1000);
      });
  };
};

export default fetchWeather;
