import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import setHeaderCityList from '../../../../store/actions/Header/setCityList';
import setIsCityModalOpen from '../../../../store/actions/Header/setIsCityModalOpen';

import s from './CityToggle.module.scss';

import ModalAcceptance from './ModalAcceptance';
import ModalCityList from './ModalCityList';



function CityToggle(props){
  const dispatch = useDispatch();
  const state = useSelector( state => state.cityToggle);
  
  const setModalOpen = () => {
    dispatch(setIsCityModalOpen(!state.isCityModalOpen));
  }

  useEffect( () => {
    dispatch(setHeaderCityList());
  }, []);

  
  return (
    <div className={s.cityToggle}>
      <button 
        className={s.cityToggleOpenButton} 
        onClick={setModalOpen}
      >{state.currentCity}</button>

      {
        state.isCityModalOpen && 
        <div className={s.modal}>
          {state.isAcceptanceModal ? <ModalAcceptance /> : <ul><ModalCityList /></ul>}
        </div>
      }
    </div>
  )
};

export default CityToggle;