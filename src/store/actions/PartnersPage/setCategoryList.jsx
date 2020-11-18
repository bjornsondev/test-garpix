import { SET_CATEGORY_LIST } from "../../../constants/constants";
import getCategoryList from "../../../FakeDB/getCategoryList";

export default function setCategoryList() {
  const categoryList = getCategoryList();
  return {
    type: SET_CATEGORY_LIST,
    categoryList: categoryList.listShort
  }
}