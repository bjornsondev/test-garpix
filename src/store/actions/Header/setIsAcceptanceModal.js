import { SET_IS_ACCEPTANCE_MODAL } from "../../../constants/constants";

export default function setIsAcceptanceModal(toggle) {
  return {
    type: SET_IS_ACCEPTANCE_MODAL,
    toggle
  }
}