import { SET_SPASIBO_TYPE } from '../../../../constants/constants';

export default function setSpasiboType(toggle) {
  return {
    type: SET_SPASIBO_TYPE,
    toggle
  }
}