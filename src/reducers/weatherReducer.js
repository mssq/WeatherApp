import { FETCH_WEATHER_START, FETCH_WEATHER_ERROR, 
  RECEIVE_WEATHER } from '../constants';

const INITIAL_STATE = {
  loading: false,
  error: 'none'
}

const timeFormatting = (time) => {
  const minutes = `${time.getMinutes() < 10 ? '0' : ''}${time.getMinutes()}`
  const hours = `${time.getHours() < 10 ? '0' : ''}${time.getHours()}`

  return `${hours}:${minutes} ${time.toLocaleDateString()}`;
}

const weatherReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_WEATHER_START:
      return { loading: true, error: 'none' };
    case FETCH_WEATHER_ERROR:
      return { ...state, loading: false, error: action.payload.message };
    case RECEIVE_WEATHER:
      return {
        id: action.payload.id,
        temp: action.payload.main.temp,
        humidity: action.payload.main.humidity,
        wind: action.payload.wind.speed,
        city: action.payload.name,
        countryCode: action.payload.sys.country,
        desc: action.payload.weather[0].main,
        time: timeFormatting(new Date()),
        loading: false,
        error: 'none' 
      };
    default:
      return null;
  }
}

export default weatherReducer;
  