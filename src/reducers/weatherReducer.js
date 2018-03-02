import { FETCH_WEATHER_START, FETCH_WEATHER_ERROR, 
  RECEIVE_WEATHER } from '../constants';

const INITIAL_STATE = {
  loading: false
}

const weatherReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_WEATHER_START:
      console.log('fetch_weather_start');
      return { loading: true };
    case FETCH_WEATHER_ERROR:
      console.log('fetch_weather_error');
      return null;
    case RECEIVE_WEATHER:
      console.log('receive_weather', action.payload);
      return {
        temp: action.payload.main.temp,
        humidity: action.payload.main.humidity,
        wind: action.payload.wind.speed,
        city: action.payload.name,
        countryCode: action.payload.sys.country,
        desc: action.payload.weather[0].main,
        loading: false };
    default:
      console.log('default');
      return null;
  }
}

export default weatherReducer;
  