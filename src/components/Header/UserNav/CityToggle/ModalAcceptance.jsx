import { useDispatch, useSelector } from 'react-redux';

import setIsCityModalOpen from '../../../../store/actions/Header/setIsCityModalOpen';
import setIsAcceptanceModal from '../../../../store/actions/Header/setIsAcceptanceModal';

import s from './CityToggle.module.scss';

import StrokedButton from '../../../Buttons/StrokedButton/StrokedButton';
import FilledButton from '../../../Buttons/FilledButton/FilledButton';


function ModalAcceptance(){
  const state = useSelector( state => state.cityToggle);
  const dispatch = useDispatch();

  const setAcceptanceModal = () => {
    dispatch(setIsAcceptanceModal(false));
  },
  setModalOpen = (toggle) => {
    dispatch(setIsCityModalOpen(toggle))
  };

  return (
    <>
      Ваш город - <span className={s.modalCurrentCity}>{ state.currentCity }</span>?

      <div className={s.modalAcceptanceButtons}>
        <FilledButton 
          onClick={() => setModalOpen(false)}
          className={s.modalAcceptButton}
        >Да</FilledButton>
        
        <StrokedButton
          onClick={() => setAcceptanceModal(false)}
        >Выберите город</StrokedButton>
      </div>
    </>
  )
};

export default ModalAcceptance;