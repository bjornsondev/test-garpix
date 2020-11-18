import { combineReducers, createStore } from 'redux';

import cityToggle from './reducers/Header/cityToggle';

const reducers = combineReducers({
  cityToggle,
})

const store = createStore(reducers);

export default store;