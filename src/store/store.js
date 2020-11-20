import { combineReducers, createStore } from 'redux';

import cityToggle from './reducers/Header/cityToggle';
import category from './reducers/PartnersPage/category';
import offers from './reducers/PartnersPage/offers';

const reducers = combineReducers({
  cityToggle,
  category,
  offers
})

const store = createStore(reducers);

export default store;