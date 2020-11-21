import { SET_OFFERS_LIST } from '../../../constants/constants';

const initialState = {
  offersList: []
}

function category(state = initialState, action) {
  switch(action.type) {
    case SET_OFFERS_LIST: 
      return {
        ...state,
        offersList: action.offersList
      }
      
    default: 
      return state;
  }
}

export default category;
