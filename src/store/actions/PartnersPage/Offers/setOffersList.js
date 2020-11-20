import { SET_OFFERS_LIST } from '../../../../constants/constants';
import getOffers from "../../../../FakeDB/getOffers";

export default function setOffersList() {
  const offersList = getOffers();
  return {
    type: SET_OFFERS_LIST,
    offersList
  }
}