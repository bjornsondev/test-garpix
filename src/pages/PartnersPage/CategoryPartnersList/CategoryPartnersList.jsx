import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PartnerCard from '../../../components/PartnerCard/PartnerCard';
import setPartnersList from '../../../store/actions/PartnersPage/Category/setPartnersList';
import s from './CategoryPartnersList.module.scss';
import correctEndings from '../../../helpers/correctEndings'
import FilledButton from '../../../components/Buttons/FilledButton/FilledButton';


function CategoryPartnersList(props){
  const state = useSelector( state => state.category);
  const dispatch = useDispatch();
  
  useEffect( () => {
    dispatch(setPartnersList(state.currentCategory, state.isTakeInToggle));
  }, [state.currentCategory, state.isTakeInToggle]);
  
  const [isShowMore, setIsShowMore] = useState(false);

  const isBigList = state.partnersList.length > 5; // Требует рефактора, временное решение
  let remainder = state.partnersList.length - 5; // Требует рефактора, временное решение
  let partners = !isShowMore ? state.partnersList.slice(0, 5) : state.partnersList; // Требует рефактора, временное решение

  const showMore = () => {
    setIsShowMore(true)
  },
  showLess = () => {
    setIsShowMore(false)
  };

  let items = partners.map( (e, i) => 
    <PartnerCard 
      isUl key={i}
      className={s.card}
      discount={e.discount}
      logo={e.logoUrl} name={e.name}
      isTakeInType={state.isTakeInToggle}
    />
  )
  return (
    <>
      <ul className={s.partnersList}>
        {items}
      </ul>

      { 
        isBigList  // Требует рефактора, временное решение
        ? (
            !isShowMore && remainder >= 1
            ? <FilledButton className={s.showMore} onClick={showMore}>
                Еще {remainder} {correctEndings(remainder, ["партнер", "партнера", "партнеров"])}
              </FilledButton>
            : <FilledButton className={s.showMore} onClick={showLess}>
                Показать меньше
              </FilledButton>
          )
        : null
      }
    </>
      
  )
};

export default CategoryPartnersList;