import { SET_IS_CITY_MODAL_OPEN } from "../../../constants/constants";

export default function setIsCityModalOpen(toggle) {
  return {
    type: SET_IS_CITY_MODAL_OPEN,
    toggle
  }
}