import { FETCH_WEATHER_START, FETCH_WEATHER_ERROR, 
  RECEIVE_WEATHER } from '../constants';

const weatherReducer = (state=[], action) => {
  switch(action.type) {
    case FETCH_WEATHER_START:
      console.log('fetch_weather_start');
      return null;
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
        desc: action.payload.weather[0].main};
    default:
      console.log('default');
      return null;
  }
}

export default weatherReducer;
  