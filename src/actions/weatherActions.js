import axios from 'axios';
import { FETCH_WEATHER_START, FETCH_WEATHER_ERROR, 
  RECEIVE_WEATHER } from '../constants';

export const fetchWeather = (city) => {
  const apikey = 'da88b7a71e00b89efe05d664ac56ea02';

  return (dispatch) => {
    dispatch({type: FETCH_WEATHER_START})
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
      .then((response) => {
        setTimeout(() => {
          dispatch({type: RECEIVE_WEATHER, payload: response.data})
        }, 500)
      })
      .catch((err) => {
        dispatch({type: FETCH_WEATHER_ERROR, payload: err})
      })
  };
}
