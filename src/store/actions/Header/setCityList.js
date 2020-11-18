import { SET_CITY_LIST } from "../../../constants/constants";
import getCityList from "../../../FakeDB/getCityList";

export default function setCityList() {
  const cityList = getCityList();
  return {
    type: SET_CITY_LIST,
    cityList: cityList.list,
    currentCity: cityList.current
  }
}