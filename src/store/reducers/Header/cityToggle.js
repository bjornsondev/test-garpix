import { SET_CITY_LIST, SET_IS_CITY_MODAL_OPEN,
         SET_CURRENT_CITY, SET_IS_ACCEPTANCE_MODAL } from "../../../constants/constants";

const initialState = {
  currentCity: "",
  cityList: [],
  isCityModalOpen: false,// Нужно не забыть поменять на true
  isAcceptanceModal: true
}

function cityToggle( state = initialState, action) {
  switch(action.type) {
    case SET_CITY_LIST:
      return {
        ...state,
        currentCity: action.currentCity,
        cityList: action.cityList
      };

    case SET_CURRENT_CITY:
      return {
        ...state,
        currentCity: action.currentCity
      };

    case SET_IS_CITY_MODAL_OPEN:
      return {
        ...state,
        isCityModalOpen: action.toggle
      };

    case SET_IS_ACCEPTANCE_MODAL:
      return {
        ...state,
        isAcceptanceModal: action.toggle
      };
    default: 
      return state;
  }
}

export default cityToggle;