import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OfferCard from '../../../components/OfferCard/OfferCard';
import setOffersList from '../../../store/actions/PartnersPage/Offers/setOffersList';
import s from './OffersList.module.scss';
import correctEndings from '../../../helpers/correctEndings'
import FilledButton from '../../../components/Buttons/FilledButton/FilledButton';


function OffersList(props){
  const state = useSelector( state => state.offers );
  const dispatch = useDispatch();
  const [isShowMore, setIsShowMore] = useState(false);

  const isBigList = state.offersList.length > 3; // Требует рефактора, временное решение
  let remainder = state.offersList.length - 3; // Требует рефактора, временное решение
  let offers = !isShowMore ? state.offersList.slice(0, 3) : state.offersList; // Требует рефактора, временное решение
  const showMore = () => {
    setIsShowMore(true)
  },
  showLess = () => {
    setIsShowMore(false)
  };

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

      { 
        isBigList  // Требует рефактора, временное решение
        ? (
            !isShowMore && remainder >= 1
            ? <FilledButton className={s.showMore} onClick={showMore}>
                Еще {remainder} {correctEndings(remainder, ["предложение", "предложения", "предложений"])}
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

export default OffersList;