import { SET_CURRENT_CATEGORY } from '../../../../constants/constants';
import getPartners from "../../../../FakeDB/getPartners";

export default function setCurrentCategory(category) {
  return {
    type: SET_CURRENT_CATEGORY,
    category
  }
}