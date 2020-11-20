import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OfferCard from '../../../components/OfferCard/OfferCard';
import setOffersList from '../../../store/actions/PartnersPage/Offers/setOffersList';
import s from './OffersList.module.scss';
import ShowMoreBtn from '../../../components/Buttons/ShowMoreBtn/ShowMoreBtn';


function OffersList(props){
  const state = useSelector( state => state.offers );
  const dispatch = useDispatch();
  const [isShowMore, setIsShowMore] = useState(false);
  
  let offers = !isShowMore ? state.offersList.slice(0, 3) : state.offersList; 
  

  useEffect(() => {
    dispatch(setOffersList())
  }, [])

  const items = offers.map( (e, i) => 
    <OfferCard
      partnerName={e.partnerName}
      text={e.text}
      bigImg={e.bigImg}
      thumbnail={e.thumbnail}
      isUl className={s.card}
      key={i}
    />  
  )

  return (
    <> 
      <ul className={s.offersList}>
        {items}
      </ul>

      <ShowMoreBtn
        className={s.showMore}
        fullListLength={state.offersList.length}
        isShowMore={isShowMore}
        columns="3"
        postWords={["предложение", "предложения", "предложений"]}
        setIsShowMore={setIsShowMore}
      />
    </>
  )
};

export default OffersList;