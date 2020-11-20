const { SET_CATEGORY_LIST, SET_CURRENT_CATEGORY, SET_PARTNERS_LIST, SET_SPASIBO_TYPE } = require("../../../constants/constants");

const initialState = {
  categories: [],
  partnersList: [],
  isFullCategories: false,
  isTakeInToggle: false, 
  currentCategory: "all",
  currentCategoryName: "Все партнеры"
}

function category(state = initialState, action) {
  switch(action.type) {
    case SET_CATEGORY_LIST: 
      return {
        ...state,
        categories: action.categories,
        isFullCategories: action.isFullCategories
      }
      
    case SET_CURRENT_CATEGORY: 
      return {
        ...state,
        categories: state.categories.map( e => {
          e.id === action.category ? e.isCurrent = true : e.isCurrent = false;
          return e; // Выглядит как костыль, надо что получше придумать
        }),
        currentCategory: action.category,
        currentCategoryName: action.categoryName
      }

    case SET_SPASIBO_TYPE: {
      return {
        ...state, 
        isTakeInToggle: action.toggle
      }
    }

    case SET_PARTNERS_LIST: {
      return {
        ...state, 
        partnersList: action.partnersList
      }
    }

    default: 
      return state;
  }
}

export default category;
