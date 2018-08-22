import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import fetchingData from '../reducers/fetchingDataReducer';
import weatherData from '../reducers/weatherDataReducer';
import route from '../reducers/routeReducer';

const middlewares = [thunk];
const reducers = combineReducers({
  fetchingData,
  weatherData,
  route
});

export default createStore(
  reducers,
  applyMiddleware(...middlewares)
)
