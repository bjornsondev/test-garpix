import { useDispatch, useSelector } from 'react-redux';

import setCurrentCity from '../../../../store/actions/Header/setCurrentCity';
import setIsCityModalOpen from '../../../../store/actions/Header/setIsCityModalOpen';
import setIsAcceptanceModal from '../../../../store/actions/Header/setIsAcceptanceModal';

import s from './CityToggle.module.scss';
  

function ModalCityList(){
  const state = useSelector( state => state.cityToggle);
  const dispatch = useDispatch();

  const onCitySelect = (city) => {
    dispatch(setCurrentCity(city));
    dispatch(setIsCityModalOpen(false));
    dispatch(setIsAcceptanceModal(true));
  }

  return state.cityList.map( (e, i) => 
    <li className={s.modalListItem} key={i}>
      <button 
        className={s.modalListBtn} 
        onClick={() => onCitySelect(e)}
      >{e}</button>
    </li>
  );
};

export default ModalCityList;