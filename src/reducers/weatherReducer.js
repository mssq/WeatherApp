import { FETCH_WEATHER_START, FETCH_WEATHER_ERROR, 
  RECEIVE_WEATHER } from '../constants';

const INITIAL_STATE = {
  loading: false,
  error: 'none'
}

const weatherReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_WEATHER_START:
      console.log('fetch_weather_start');
      return { loading: true, error: 'none' };
    case FETCH_WEATHER_ERROR:
      console.log('fetch_weather_error');
      return { ...state, loading: false, error: action.payload.message };
    case RECEIVE_WEATHER:
      console.log('receive_weather');
      return {
        id: action.payload.id,
        temp: action.payload.main.temp,
        humidity: action.payload.main.humidity,
        wind: action.payload.wind.speed,
        city: action.payload.name,
        countryCode: action.payload.sys.country,
        desc: action.payload.weather[0].main,
        loading: false,
        error: 'none' };
    default:
      console.log('default');
      return null;
  }
}

export default weatherReducer;
  