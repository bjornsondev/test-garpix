import { SET_CURRENT_CITY } from "../../../constants/constants";

export default function setCurrentCity(currentCity) {
  return {
    type: SET_CURRENT_CITY,
    currentCity
  }
}