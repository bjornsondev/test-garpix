import { SET_SINGLE_OFFER_PAGE } from '../../../constants/constants';
import getSingleOfferContent from "../../../FakeDB/getSingleOfferContent";

export default function setSingleOfferPage() {
  const currentOffer = getSingleOfferContent();
  return {
    type: SET_SINGLE_OFFER_PAGE,
    currentOffer
  }
}