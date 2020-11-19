import { SET_CATEGORY_LIST } from "../../../../constants/constants";
import getCategoryList from "../../../../FakeDB/getCategoryList";

export default function setCategoryList(isFullCategories) {
  const categoryList = getCategoryList();

  const categories = !isFullCategories 
        ? categoryList.listShort 
        : categoryList.listShort.concat(categoryList.listFull);

  return {
    type: SET_CATEGORY_LIST,
    categories,
    isFullCategories
  }
}