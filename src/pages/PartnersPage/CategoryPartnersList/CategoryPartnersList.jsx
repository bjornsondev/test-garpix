import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PartnerCard from '../../../components/PartnerCard/PartnerCard';
import setPartnersList from '../../../store/actions/PartnersPage/Category/setPartnersList';
import s from './CategoryPartnersList.module.scss';
import ShowMoreBtn from '../../../components/Buttons/ShowMoreBtn/ShowMoreBtn';


function CategoryPartnersList(props){
  const state = useSelector( state => state.category);
  const dispatch = useDispatch();
  const [isShowMore, setIsShowMore] = useState(false);
  
  useEffect( () => {
    dispatch(setPartnersList(state.currentCategory, state.isTakeInToggle));
  }, [state.currentCategory, state.isTakeInToggle]);
  

  let partners = !isShowMore ? state.partnersList.slice(0, 5) : state.partnersList;

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

      <ShowMoreBtn
        className={s.showMore}
        fullListLength={state.partnersList.length}
        isShowMore={isShowMore}
        columns="5"
        postWords={["партнер", "партнера", "партнеров"]}
        setIsShowMore={setIsShowMore}
      />
    </>
      
  )
};

export default CategoryPartnersList;