import { SET_SINGLE_OFFER_PAGE } from "../../../constants/constants";

const initialState = {
  currentOffer: {
    img: "",
    name: "",
    partnerName: "",
    partnerThumb: "",
    dateFrom: "",
    dateTo: "",
    content: ``,
    yaMapIframe: ``, // наверное это самое смешное что можно придумать, но я не знаю(пока что) как это решить
    partnerInfoList: [
      {
        address: "",
        metroStation1: "",
        metroStation2: "",
        tel: "",
        shedule: "",
        partnerSiteLink: "",
        partnerSiteName: "",
        yaMapLink: "" 
      }
    ]
  }
}

function singleOfferPage(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_OFFER_PAGE:
      return {
        ...state,
        currentOffer: {
          ...action.currentOffer,
          content: `${action.currentOffer.content}`
        }
      };
    default:
      return state;
  }
}

export default singleOfferPage;