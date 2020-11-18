import { combineReducers, createStore } from 'redux';

import cityToggle from './reducers/Header/cityToggle';
import category from './reducers/PartnersPage/category';

const reducers = combineReducers({
  cityToggle,
  category
})

const store = createStore(reducers);

export default store;