import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import setSpasiboType from '../../../store/actions/PartnersPage/Category/setSpasiboType';
import s from './SpasiboTypeToggle.module.scss';



function SpasiboTypeToggle(props){
  const state = useSelector( state => state.category );
  const dispatch = useDispatch();
  
  const [isTakeInToggle, setIsTakeInToggle] = useState(false);

  const toggleActiveStyle = state.isTakeInToggle ? " active" : "";
  const invertActiveStyle = !state.isTakeInToggle ? " active" : "";

  useEffect( () => {
    dispatch(setSpasiboType(isTakeInToggle));
  },[isTakeInToggle])

  
  return (
    <div className={s.spasiboType}>
      <button 
        className={s.spasiboTypeBtn + invertActiveStyle} 
        onClick={() => setIsTakeInToggle(false)}
        disabled={!state.isTakeInToggle}>
        Начисляют спасибо
      </button>

      <label htmlFor="spasiboTypeToggle" className={s.spasiboTypeToggle + toggleActiveStyle}>
        <input 
          className="visually-hidden"
          type="checkbox" id="spasiboTypeToggle"
          onChange={(e) => setIsTakeInToggle(e.currentTarget.checked)}
          checked={state.isTakeInToggle}
        />
      </label>

      <button 
        className={s.spasiboTypeBtn + toggleActiveStyle} 
        onClick={() => setIsTakeInToggle(true)}
        disabled={state.isTakeInToggle}>
        Принимают спасибо
      </button>
    </div>
  )
};

export default SpasiboTypeToggle;