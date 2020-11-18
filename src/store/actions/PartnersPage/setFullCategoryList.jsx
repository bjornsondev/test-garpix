import { SET_FULL_CATEGORY_LIST } from "../../../constants/constants";
import getCategoryList from "../../../FakeDB/getCategoryList";


export default function setFullCategoryList() {
  const categoryList = getCategoryList();
  return {
    type: SET_FULL_CATEGORY_LIST,
    fullList: categoryList.listFull
  }
}