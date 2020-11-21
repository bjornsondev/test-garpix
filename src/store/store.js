import { combineReducers, createStore } from 'redux';

import cityToggle from './reducers/Header/cityToggle';
import category from './reducers/PartnersPage/category';
import offers from './reducers/PartnersPage/offers';
import singleOfferPage from './reducers/SingleOfferPage/singleOfferPage';

const reducers = combineReducers({
  cityToggle,
  category,
  offers,
  singleOfferPage
})

const store = createStore(reducers);

window.store = store; // for debug

export default store;