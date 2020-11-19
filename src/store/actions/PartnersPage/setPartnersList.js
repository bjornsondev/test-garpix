import { SET_PARTNERS_LIST } from '../../../constants/constants';
import getPartners from '../../../FakeDB/getPartners';

export default function setPartnersList(category, toggle) {
  let partnersList = getPartners();

  // toggle: true - принимают, false - начисляют Спасибо
  if (category === "all" && toggle) { 
    partnersList = partnersList.filter( e => e.isTakeInSpasibo )
  } 
  else if (category === "all" && !toggle) { 
    partnersList = partnersList.filter( e => e.isReturnSpasibo )
  } 
  else if (toggle) { 
    partnersList = partnersList.filter( e => e.isTakeInSpasibo && e.category.includes(category) )
  }
  else if(!toggle) { 
    partnersList = partnersList.filter( e => e.isReturnSpasibo && e.category.includes(category) )
  }
  return {
    type: SET_PARTNERS_LIST,
    partnersList
  }
}