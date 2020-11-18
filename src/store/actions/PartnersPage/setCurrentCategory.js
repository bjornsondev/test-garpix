import { SET_CURRENT_CATEGORY } from '../../../constants/constants';

export default function setCurrentCategory(id) {
  // Тут можно сделать запрос по айдишнику категории
  return {
    type: SET_CURRENT_CATEGORY,
    id
  }
}