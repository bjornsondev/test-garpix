const { SET_CATEGORY_LIST, SET_CURRENT_CATEGORY, SET_FULL_CATEGORY_LIST, SET_SHORT_CATEGORY_LIST } = require("../../../constants/constants");

const initialState = {
  categoryList: [],
  isFullCategoryList: false
}

function category(state = initialState, action) {
  switch(action.type) {
    case SET_CATEGORY_LIST: 
      return {
        ...state,
        categoryList: action.categoryList
      }
      
    case SET_CURRENT_CATEGORY: 
      return {
        ...state,
        categoryList: state.categoryList.map( e => { // В экшне можно сделать запрос по текущей категории
          let newEl = {...e};
          e.id === action.id ? newEl.isCurrent = true : newEl.isCurrent = false;
          return newEl;
        })
      }

    case SET_FULL_CATEGORY_LIST: 
      return {
        ...state,
        categoryList: [...state.categoryList, ...action.fullList],
        isFullCategoryList: true
      }

    case SET_SHORT_CATEGORY_LIST: 
      return {
        ...state,
        categoryList: [...state.categoryList.slice(0, 9)],
        isFullCategoryList: false
      }
      
    default: 
      return state;
  }
}

export default category;